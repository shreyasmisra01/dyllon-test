/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Button from "./components/Button";
import ImageAlt from "./components/ImageAlt";
import DuplicateAriaId from "./components/DuplicateAriaIdInForm";
import LinksWithoutDiscernibleText from "./components/LinksWithoutDiscernibleText";
import TableWithoutCaption from "./components/TableWithoutCaption";
import DialogWithoutAccessibleName from "./components/DialogWithoutAccessibleName";
import MissingRoleText from "./components/MissingRoleText";
import TreeItemWithoutName from "./components/TreeItemWithoutAriaName";
import IframeWithoutTestingScript from "./components/IframeWithoutTestingScript";
import TabIndexError from "./components/TabIndexError";
import ObjectWithoutAlt from "./components/ObjectWithoutAlt";
import AreaWithoutAlt from "./components/AreaWithoutAlt";
import AriaCommandName from "./components/AriaCommandName";
import AriaInputFieldNameError from "./components/AriaInputFieldNameError";
import AriaHiddenFocusError from "./components/AriaHiddenFocusError";
import AriaMeterNameError from "./components/AriaMeterNameError";
import ProgressBar from "./components/ProgressBar";
import AriaRequiredAttr from "./components/AriaRequiredAttr";
import AriaRequiredChildren from "./components/AriaRequiredChildren";
import AriaRequiredParent from "./components/AriaRequiredParent";
import AriaRoles from "./components/AriaRoles";
import AriaToggleFieldName from "./components/AriaToggleFieldName";
import AriaTooltipName from "./components/AriaTooltipName";
import AriaValidAttrValue from "./components/AriaValidAttrValue";
import SelectName from "./components/SelectName";
import AriaValidAttr from "./components/AriaValidAttr";
import Bypass from "./components/Bypass";
import LandmarkOneMain from "./components/LandmarkOneMain";
import LandmarkUnique from "./components/LandmarkUnique";
import AriaConditionalAttr from "./components/AriaConditionalAttr";
import ScopeAttrValid from "./components/ScopeAtrrValid";
import AriaDeprecatedRole from "./components/AriaDeprecatedRole";
import AriaText from "./components/AriaText";
import LandmarkNoDuplicateBanner from "./components/LandmarkNoDuplicateBanner";

export default async function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] text-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <nav id="nav-homepage">
        <ul className="flex justify-center gap-4">
          <li className="text-2xl font-bold text-black hover:underline">
            <Link href="/insert">Insert javascript url</Link>
          </li>
        </ul>
      </nav>
      
      <main
        id="main-on-homepage"
        aria-label="homepage-main-section"
        className="flex flex-col gap-8 row-start-2 items-center sm:items-start"
      >
        <header aria-label="header-section" className="border border-black">
          <p>This is a header section of this website</p>
        </header>

        <header aria-label="header-section" className="border border-blue-300">
          <p>This is header section is for triggering the Landmark No Duplicate Banner issue</p>
        </header>
        <Button />
        <ImageAlt />
        <DuplicateAriaId />
        <LinksWithoutDiscernibleText />
        <TableWithoutCaption />
        <DialogWithoutAccessibleName />
        <MissingRoleText />
        <TreeItemWithoutName />
        <IframeWithoutTestingScript />
        <TabIndexError />
        <ObjectWithoutAlt />
        <AreaWithoutAlt />
        <AriaCommandName />
        <AriaHiddenFocusError />
        <AriaInputFieldNameError />
        <AriaMeterNameError />
        <ProgressBar />
        <AriaRequiredAttr />
        <AriaRequiredChildren />
        <AriaRequiredParent />
        <AriaRoles />
        <AriaToggleFieldName />
        <AriaTooltipName />
        <AriaValidAttrValue />
        <SelectName />
        <AriaValidAttr />
        <Bypass />

        <p>Another main tag on homepage. Nested inside a main tag</p>
        <main id="main-on-homepage" aria-label="homepage-main-section" className="border border-blue-300 flex flex-col gap-8 row-start-2 items-center sm:items-start">
          {/* Latest added */}
          <LandmarkOneMain />
          <LandmarkUnique />
          <AriaConditionalAttr />
          <ScopeAttrValid />
          <AriaDeprecatedRole />
          <AriaText />
          <LandmarkNoDuplicateBanner />
        </main>
      </main>
    </div>
  );
}
