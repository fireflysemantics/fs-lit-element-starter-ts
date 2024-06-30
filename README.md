# Firefly Semantics Github Flow Starter Project 

This is a baseline starter project providing documents that are commonly used in Github Flow open source projects.  It has the following features:

- [MIT Licence](./LICENSE)
- [Contributor Covenant Code of Conduct][conduct]
- [Contribution Guidelines][contributing]
- [Guidelines for Seeking Help][questions]
- [Guidelines for Extending This Project][extension]
- Release and Changelog Automation with [Release It!](https://github.com/release-it/release-it)
- Commit Linting with [commitlint](https://github.com/conventional-changelog/commitlint)
- [Husky](https://www.npmjs.com/package/husky) for triggering commit linting and on commit test automation and linting for projects extending this one. 


This starter project is setup to make following the [Conventional Commits Specification][conventional-commits] for adding human and machine readable meaning to commit messages easy.

Following the convention allows for proper use of the [Semantic Versioning Specification](https://semver.org/) and also enables automatic generation of the projects changelog ( `CHANGELOG.md`).

This projects includes [release-it](https://github.com/release-it/release-it) which will automatically generate the `CHANGELOG.md` file when running `npm run release`.

# Get Started

To get started extending this project see the [Guidelines for Extending This Project][extension].

[conduct]: .github/CODE_OF_CONDUCT.md
[commit]: .github/COMMIT_GUIDELINES.md
[contributing]: .github/CONTRIBUTING.md
[extension]: .github/PROJECT_EXTENSION.md
[questions]: .github/QUESTIONS.md