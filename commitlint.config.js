/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 枚举，与 .cz-config.cjs 保持一致
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    // 本项目条目以模型/提供商为主，scope 允许留空
    'scope-empty': [0],
    'scope-case': [2, 'always', 'kebab-case'],
    // 标题中英文均可，但必须有内容
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
    'body-max-line-length': [0],
  },
};
