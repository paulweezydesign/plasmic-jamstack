// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hRonsRSUBMZALP4tvDgRLM
// Component: xNfw6189E2Z3X
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: nhlNKPJYgoD42t/component
import Button from "../../Button"; // plasmic-import: nfXkj2l6vptXDw/component
import { useScreenVariants as useScreenVariantsvWsL148LAzcFq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: VWsL148lAzc-FQ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: hRonsRSUBMZALP4tvDgRLM/projectcss
import sty from "./PlasmicHomeCta.module.css"; // plasmic-import: xNfw6189E2Z3X/css
import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: jB7j8zKHrBSycX/icon

export const PlasmicHomeCta__VariantProps = new Array();

export const PlasmicHomeCta__ArgProps = new Array();

function PlasmicHomeCta__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvWsL148LAzcFq()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__gv4TT)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aNj91
          )}
        >
          {"Powering your business"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__v7CYv
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__afrx0)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            color={"dark"}
            placeholder={"Your email..."}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue"}
          >
            {"Subscribe"}
          </Button>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__l8BwL
          )}
        >
          {"7 days free trial. No credit card required."}
        </div>
      </p.Stack>

      {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
        <div className={classNames(projectcss.all, sty.freeBox__acei4)}>
          <SphereIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "button", "svg"],
  textInput: ["textInput", "textbox"],
  button: ["button"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomeCta__ArgProps,
          internalVariantPropNames: PlasmicHomeCta__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
