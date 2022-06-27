import {
  cursorFontStyles,
  setCursorStyles,
} from "../../src/helpers/setCursorStyles";

it("sets styles", () => {
  setHTML`<span id="element"></span>
    <style>
      #element {
        font-family: "Source Sans Pro";
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        color: blue;
        line-height: 1;
      }
    </style>
  `;

  const element = document.getElementById("element");
  const id = "9";

  setCursorStyles(id, element);

  expect(document.head.querySelector('style[id="9"]')).not.toBeNull();

  // Zero-width is being set.
  expect(document.head.innerHTML).toMatch(/display: inline-block; width: 0;/);

  // Custom properties are being set.
  Object.entries(cursorFontStyles).forEach(([styleName]) => {
    expect(document.head.innerHTML).toMatch(
      new RegExp(`var\\(--ti-cursor-${styleName}, (.+)\\);`)
    );
  });
});

it("includes CSS animation when Web Animation API is not supported", () => {
  setHTML`<span id="element"></span>
  `;

  const id = "10";
  const element = document.getElementById("element");

  setCursorStyles(id, element, true, 900);

  expect(document.head.innerHTML).toMatch(
    new RegExp("animation: blink-10 0\\.9s infinite;")
  );

  console.log(document.head.innerHTML);
});
