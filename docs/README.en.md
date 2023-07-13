# CUSTOM-DEVICES

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Change language from README to [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/FelCer/vtex-context/blob/main/docs/README.md)

This application serves as an example to handle contexts.
<br>

## Implementation

1. Import `{{vendor}}.context` into the IO theme's `manifest.json` file.

```
  "dependencies": {
    // Validate the version that the application is found.
    "{{vendor}}.context": "0.x",
  }

```

## Example use

![Media Placeholder](./assets/example_use.png 'image of example use')

## Available components

- `my-component`
- `children-one`
- `children-two`
  <br>

## Component `my-component`

This component is used to create the context and pass it to its children.

## Component `children-one`

This component is used to show X field how it changes according to its state.

## Component `children-two`

This component is used to modify X field and activate the modification event.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people: ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/22477264?v=4" width="100px;" alt=""/><br /><sub><b>Luis Felipe Cerero Garcia</b></sub></a><br /><a href="https://github.com/ITGlobers/showcase-cencosud/commits?author=felcer" title="Documentation">📖</td>
  </tr>
</table>

<!-- DOCS-IGNORE:end -->
