import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import uglify from 'rollup-plugin-uglify';

const shared = {
  input: `src/index.js`,
  external: ['react']
};

export default [
  Object.assign({}, shared, {
    output: {
      name: 'Modly',
      format: 'umd',
      sourcemap: true,
      file:
        process.env.NODE_ENV === 'production'
          ? './dist/modly.umd.min.js'
          : './dist/modly.umd.js',
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
        include: /node_modules/
      }),
      sourceMaps(),
      process.env.NODE_ENV === 'production' && filesize(),
      process.env.NODE_ENV === 'production' && (
        uglify({
          output: { comments: false },
          compress: {
            keep_infinity: true,
            pure_getters: true
          },
          warnings: true,
          ecma: 5,
          toplevel: false
        })
      )
    ]
  }),

  Object.assign({}, shared, {
    output: [
      {
        file: 'dist/modly.es6.js',
        format: 'es',
        sourcemap: true,
        exports: 'named',
        globals: { react: 'React' }
      },
      {
        file: 'dist/modly.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
        globals: { react: 'React' }
      }
    ],
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/
      }),
      sourceMaps()
    ],
  }),
];
