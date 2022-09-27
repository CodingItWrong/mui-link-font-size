# MUI Link Font Size Bug

Demonstrates a bug where the `typography.fontSize` theme setting does not appear to apply to `Link`s in the same way as other MUI components.

## Requirements

- [Node](https://nodejs.org)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)

## Installation

- Clone the repo
- Run `yarn install`

Dependencies are locked with `yarn.lock`; please use `yarn` rather than `npm` for installing.

## Running

- Run `yarn start`

Note that although the `Button` and `Typography` components have typical font size, the `Link` is very small. This is because the root element `html` is set to a font size of 10pt. Setting the `typography.fontSize` setting should counteract this, and it does for `Button` and `Typography`, but not for `Link`; the `Link` does not have any font size applied to it.
