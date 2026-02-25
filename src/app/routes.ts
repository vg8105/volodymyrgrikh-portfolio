import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Experience } from "./components/pages/Experience";
import { Skills } from "./components/pages/Skills";
import { Contact } from "./components/pages/Contact";
import { CaseStudies } from "./components/pages/CaseStudies";
import { CaseStudyDetail } from "./components/pages/CaseStudyDetail";
import { CaseCTTOmnichannel } from "./components/pages/CaseCTTOmnichannel";
import { CasePayshop } from "./components/pages/CasePayshop";
import { CaseGovTech } from "./components/pages/CaseGovTech";
import { CaseEPO } from "./components/pages/CaseEPO";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: CaseStudies },
      { path: "work/:id", Component: CaseStudyDetail },
      { path: "case/ctt-omnichannel", Component: CaseCTTOmnichannel },
      { path: "case/payshop-payments", Component: CasePayshop },
      { path: "case/govtech-social-security", Component: CaseGovTech },
      { path: "case/enterprise-epo", Component: CaseEPO },
      { path: "experience", Component: Experience },
      { path: "skills", Component: Skills },
      { path: "contact", Component: Contact },
    ],
  },
]);