import "twin.macro";
import styledImport, {
  CSSProp as CssPropImport,
  css as cssImport,
} from "styled-components";
import "@testing-library/jest-dom";

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  // The css prop
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
  // The inline svg css prop
  interface SVGProps<T> extends React.SVGProps<SVGSVGElement> {
    css?: CSSProp;
    tw?: string;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      as?: string | Element;
      css?: CSSProp;
    }
  }
}
