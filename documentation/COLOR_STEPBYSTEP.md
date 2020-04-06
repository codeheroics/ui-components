# How to add a color

In order to avoid repetitive/manual work to create color stylesheets, we choose to generate them. Here's a step by step guide to add a color:

1. Add the color to [`src/design-tokens/colors/colors.json`](../src/design-tokens/colors/colors.json)

```json
{
    ...,
    "black": "#000000",
    ...
}
```

2. Run `yarn generate-colors-stylesheets`. This will generate `colors.css`, `colors.scss` and `colors.ts`
