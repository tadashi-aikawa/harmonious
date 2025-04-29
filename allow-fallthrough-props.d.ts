import "vue";

declare module "vue" {
  // for vue components
  interface AllowedComponentProps {
    href?: string;
    alt?: string;
    // inputにフォールスルー属性として利用
    type?: unknown;
    dataSlot?: unknown;
    // LargeInput以外の箇所でフォールスルー属性として利用と仮定
    placeholder?: unknown;
    // @changeのフォールスルー属性
    onChange?: unknown;

    // TODO: フォールスルー属性が増えたら追加していく
  }

  // for native html elements
  interface HTMLAttributes {
    // allow any data-* attr
    [key: `data-${string}`]: string;
  }
}

export {};
