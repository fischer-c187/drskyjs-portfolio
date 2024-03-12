module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {},
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      // Define the configuration for `<script>` tag when using `client-side-ts` processor.
      // Script in `<script>` is assigned a virtual file name with the `.ts` extension.
      files: ['**/*.astro/*.ts', '*.astro/*.ts'],
      env: {
        browser: true,
        es2020: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: null,
      },
    },
  ],
};
