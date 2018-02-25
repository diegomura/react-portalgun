import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const shared = {
  input: `src/index.js`,
  external: ['react']
};

export default [
  Object.assign({}, shared, {
    output: {
      name: 'portalgun',
      format: 'umd',
      sourcemap: true,
      file:
        process.env.NODE_ENV === 'production'
          ? './dist/portalgun.umd.min.js'
          : './dist/portalgun.umd.js',
      exports: 'named',
      globals: { react: 'React' }
    },

    plugins: [
      resolve(),
      replace({
        exclude: 'node_modules/**',
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        ),
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'node_modules/prop-types/index.js': ['func'],
        },
      }),
      sourceMaps(),
      process.env.NODE_ENV === 'production' && filesize(),
      process.env.NODE_ENV === 'production' && (
        uglify({}, minify)
      )
    ]
  }),

  Object.assign({}, shared, {
    output: [
      {
        file: 'dist/portalgun.es6.js',
        format: 'es',
        sourcemap: true,
        exports: 'named',
        globals: { react: 'React' }
      },
      {
        file: 'dist/portalgun.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        globals: { react: 'React' }
      }
    ],
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'node_modules/prop-types/index.js': ['func'],
        },
      }),
      sourceMaps()
    ],
  }),
];
