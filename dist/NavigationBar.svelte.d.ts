import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        prefersLargeTitle?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'left-button': {};
        default: {};
        'right-button': {};
    };
};
export type NavigationBarProps = typeof __propDef.props;
export type NavigationBarEvents = typeof __propDef.events;
export type NavigationBarSlots = typeof __propDef.slots;
export default class NavigationBar extends SvelteComponentTyped<NavigationBarProps, NavigationBarEvents, NavigationBarSlots> {
}
export {};
