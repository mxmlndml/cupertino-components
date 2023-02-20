import { browser } from "$app/environment";
let onColorThemeChange;
const resetThemeColor = () => {
    if (!browser) {
        return;
    }
    // delete meta theme color tags
    const metaTags = document.querySelectorAll(`meta[name="theme-color"]`);
    metaTags.forEach((tag) => {
        tag.remove();
    });
    // remove color theme change event listener
    if (onColorThemeChange !== undefined) {
        matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", onColorThemeChange);
    }
};
const setThemeColor = (color) => {
    if (!browser) {
        return;
    }
    const getCustomPropertyValue = (property) => getComputedStyle(document.body).getPropertyValue(property);
    resetThemeColor();
    // read passed color value
    const isCustomProperty = color.startsWith("--");
    const colorValue = isCustomProperty ? getCustomPropertyValue(color) : color;
    // set theme color
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = colorValue;
    document.head.appendChild(meta);
    // use updated custom property on theme change
    if (isCustomProperty) {
        onColorThemeChange = () => {
            setThemeColor(color);
        };
        matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onColorThemeChange);
    }
};
export { resetThemeColor, setThemeColor };
