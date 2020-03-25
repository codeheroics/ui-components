# How to add an icon

In order to avoid repetitive/manual work to create svg icons components (since they are all similar and only the content of the svg changes [see `src/atoms/icons` folder]), we choose to generate them. Here's a step by step guide to add an icon:

1. Extract the icon `svg` and open it in your IDE

```xml
<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z" fill="#0E353D"/>
</svg>
```

2. Copy the svg content, removing the `<svg>` container and `fill` attributes

```xml
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z"/>
```

3. Escape all `"` replacing them with `\"`

```xml
<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\" fill=\"#0E353D\"/>
```

4. Add the escaped content to [`src/design-tokens/icons/icons-defs.json`](../src/design-tokens/icons/icons-defs.json), or update it if already existing

```json
{
  ...,
  "my icon": "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0H22V14.9398H11.3508L5 20V14.9398H0V0ZM2 1.99197V12.9478H7V15.8555L10.6492 12.9478H20V1.99197H2ZM7 7.96788H6V5.97591H9V9.95985H7V7.96788ZM13 7.96788H12V5.97591H15V9.95985H13V7.96788Z\" fill=\"#0E353D\"/>"
}
```

5. Run the icon generator task

```bash
yarn generate-icon-components
```

This commandline runs [this script](../config/generator/icons/generateIcons.js), that generates all specified icons in `icons-defs.json` following [this template](../config/generator/icons/IconComponentTemplate.tsx.hbs). It also updates the `src/atoms/svg/index.ts` to export the generated components.

> Note: this process is safe: no duplicated components/exports will be generated (if files already exist they will be overridden)
