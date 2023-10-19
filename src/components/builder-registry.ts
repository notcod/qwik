import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Counter from "./counter/counter";
import { Navbar, NavLink } from "./navbar";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
  },
  {
    component: Navbar,
    name: "Navbar",
  },
  {
    component: NavLink,
    name: "NavLink",
    inputs: [
      {
        name: "about",
        type: "string",
      },
      {
        name: "accessKey",
        type: "string",
      },
      {
        name: "aria-activedescendant",
        type: "string",
      },
      {
        name: "aria-atomic",
        type: "string",
      },
      {
        name: "aria-autocomplete",
        type: "string",
      },
      {
        name: "aria-busy",
        type: "string",
      },
      {
        name: "aria-checked",
        type: "string",
      },
      {
        name: "aria-colcount",
        type: "number",
      },
      {
        name: "aria-colindex",
        type: "number",
      },
      {
        name: "aria-colspan",
        type: "number",
      },
      {
        name: "aria-controls",
        type: "string",
      },
      {
        name: "aria-current",
        type: "string",
      },
      {
        name: "aria-describedby",
        type: "string",
      },
      {
        name: "aria-details",
        type: "string",
      },
      {
        name: "aria-disabled",
        type: "string",
      },
      {
        name: "aria-dropeffect",
        type: "string",
      },
      {
        name: "aria-errormessage",
        type: "string",
      },
      {
        name: "aria-expanded",
        type: "string",
      },
      {
        name: "aria-flowto",
        type: "string",
      },
      {
        name: "aria-grabbed",
        type: "string",
      },
      {
        name: "aria-haspopup",
        type: "string",
      },
      {
        name: "aria-hidden",
        type: "string",
      },
      {
        name: "aria-invalid",
        type: "string",
      },
      {
        name: "aria-keyshortcuts",
        type: "string",
      },
      {
        name: "aria-label",
        type: "string",
      },
      {
        name: "aria-labelledby",
        type: "string",
      },
      {
        name: "aria-level",
        type: "number",
      },
      {
        name: "aria-live",
        type: "string",
      },
      {
        name: "aria-modal",
        type: "string",
      },
      {
        name: "aria-multiline",
        type: "string",
      },
      {
        name: "aria-multiselectable",
        type: "string",
      },
      {
        name: "aria-orientation",
        type: "string",
      },
      {
        name: "aria-owns",
        type: "string",
      },
      {
        name: "aria-placeholder",
        type: "string",
      },
      {
        name: "aria-posinset",
        type: "number",
      },
      {
        name: "aria-pressed",
        type: "string",
      },
      {
        name: "aria-readonly",
        type: "string",
      },
      {
        name: "aria-relevant",
        type: "string",
      },
      {
        name: "aria-required",
        type: "string",
      },
      {
        name: "aria-roledescription",
        type: "string",
      },
      {
        name: "aria-rowcount",
        type: "number",
      },
      {
        name: "aria-rowindex",
        type: "number",
      },
      {
        name: "aria-rowspan",
        type: "number",
      },
      {
        name: "aria-selected",
        type: "string",
      },
      {
        name: "aria-setsize",
        type: "number",
      },
      {
        name: "aria-sort",
        type: "string",
      },
      {
        name: "aria-valuemax",
        type: "number",
      },
      {
        name: "aria-valuemin",
        type: "number",
      },
      {
        name: "aria-valuenow",
        type: "number",
      },
      {
        name: "aria-valuetext",
        type: "string",
      },
      {
        name: "autoCapitalize",
        type: "string",
      },
      {
        name: "autoCorrect",
        type: "string",
      },
      {
        name: "autoSave",
        type: "string",
      },
      {
        name: "children",
        type: "string",
      },
      {
        name: "class",
        type: "string",
      },
      {
        name: "color",
        type: "string",
      },
      {
        name: "contentEditable",
        type: "string",
      },
      {
        name: "contextMenu",
        type: "string",
      },
      {
        name: "dangerouslySetInnerHTML",
        type: "string",
      },
      {
        name: "datatype",
        type: "string",
      },
      {
        name: "dir",
        type: "string",
      },
      {
        name: "document:onLoad$",
        type: "string",
      },
      {
        name: "document:onScroll$",
        type: "string",
      },
      {
        name: "document:onVisibilityChange$",
        type: "string",
      },
      {
        name: "document:onVisible$",
        type: "string",
      },
      {
        name: "download",
        type: "string",
      },
      {
        name: "draggable",
        type: "boolean",
      },
      {
        name: "hidden",
        type: "string",
      },
      {
        name: "href",
        type: "string",
      },
      {
        name: "hrefLang",
        type: "string",
      },
      {
        name: "id",
        type: "string",
      },
      {
        name: "inlist",
        type: "string",
      },
      {
        name: "inputMode",
        type: "string",
      },
      {
        name: "is",
        type: "string",
      },
      {
        name: "itemID",
        type: "string",
      },
      {
        name: "itemProp",
        type: "string",
      },
      {
        name: "itemRef",
        type: "string",
      },
      {
        name: "itemScope",
        type: "boolean",
      },
      {
        name: "itemType",
        type: "string",
      },
      {
        name: "key",
        type: "string",
      },
      {
        name: "lang",
        type: "string",
      },
      {
        name: "media",
        type: "string",
      },
      {
        name: "ping",
        type: "string",
      },
      {
        name: "placeholder",
        type: "string",
      },
      {
        name: "prefetch",
        type: "boolean",
      },
      {
        name: "prefix",
        type: "string",
      },
      {
        name: "property",
        type: "string",
      },
      {
        name: "q:slot",
        type: "string",
      },
      {
        name: "radioGroup",
        type: "string",
      },
      {
        name: "ref",
        type: "string",
      },
      {
        name: "referrerPolicy",
        type: "string",
      },
      {
        name: "rel",
        type: "string",
      },
      {
        name: "reload",
        type: "boolean",
      },
      {
        name: "replaceState",
        type: "boolean",
      },
      {
        name: "resource",
        type: "string",
      },
      {
        name: "results",
        type: "number",
      },
      {
        name: "role",
        type: "string",
      },
      {
        name: "scroll",
        type: "boolean",
      },
      {
        name: "security",
        type: "string",
      },
      {
        name: "slot",
        type: "string",
      },
      {
        name: "spellcheck",
        type: "boolean",
      },
      {
        name: "style",
        type: "string",
      },
      {
        name: "tabIndex",
        type: "number",
      },
      {
        name: "target",
        type: "string",
      },
      {
        name: "text",
        type: "string",
      },
      {
        name: "title",
        type: "string",
      },
      {
        name: "translate",
        type: "string",
      },
      {
        name: "type",
        type: "string",
      },
      {
        name: "typeof",
        type: "string",
      },
      {
        name: "unselectable",
        type: "string",
      },
      {
        name: "vocab",
        type: "string",
      },
    ],
  },
];
