### Grid TextFields

In this component, you should use below MUI components:

1. Container
2. Grid
3. TextFields
4. Button
5. Typography

first of all watch the video in this path: /public/help/mui_form.mp4
you should create a register form like video using mentioned component

hint1: you can use breakpoints for each style property

example:

```jsx
<Box
  width={300}
  height={300}
  sx={{ backgroundColor: { xs: "red", md: "blue", lg: "purple" } }}
></Box>

OR

<Typography fontWeight={{xs: 'light', sm: 'normal', lg: 'bold' }}>APS</Typography>
```

hint2: the TextField has `multiline` and `row` props to make the input accepts more than one line of characters

example:

```jsx
<TextField variant="outlined" multiline rows={10} />
```
