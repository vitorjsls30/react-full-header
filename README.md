# React FullHeader Component
[![Build Status](https://travis-ci.org/vitorjsls30/react-full-header.svg?branch=master)](https://travis-ci.org/vitorjsls30/react-full-header.svg?branch=master)

> A Simple FullHeader Component using React and tested with Storybook

## Getting Started

### Installation

```sh
npm i --save vs-react-full-header
```

### Basic Usage
```jsx
import FullHeader from 'vs-react-full-header';

...
render () {
  return (
    <FullHeader
      title="Yo!"
      subtitle="Ahoy Pirate!! p)"
      bgColor="#EBE9EB"
      textColor="#3299BB"
      font="Lobster"
      video="my_video.mp4"
    />
  );
}
...
```
### Component Props
- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - background image
- `video` (string) - background video url
- `textColor` (string) - texts color
- `font` (string) - font-family for texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](https://github.com/vitorjsls30/react-full-header/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/vitorjsls30/react-full-header/blob/rfh-01/LICENSE.md)
