import React from "react";
import { projectName } from "../App";

const Treatment = () => {
    return (
        <React.Fragment>
            <main
                className="main other legal"
                style={{ backgroundColor: "#EAECEF" }}
            >
                <section className="top-line">
                    <div className="top-line__box">
                        <div className="top-line__left">
                            <div className="top-line__img">
                                <img src="/assets/img/other/shiftlixlogobig.svg" />
                            </div>
                            <div className="top-line__content">
                                <div className="top-line__title">
                                    Special Treatment
                                </div>
                                <div className="top-line__des">
                                    Updated 30 Aug 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main__box">
                    <section className="information">
                        <div className="information__container">
                            <p>
                                The “Special Treatment” (“ST”) mechanism is
                                widely used in crypto exchanges for projects at
                                risk of being delisted, and they will be under
                                mandatory review over a specified period. The
                                project moved to “Special Treatment” is
                                designated as a Special Treatment project,
                                facing the risk of being delisted after the
                                observation period.
                            </p>
                            <p>
                                This article will walk you through the
                                situations for projects that may be designated
                                as Special Treatment projects or be delisted.
                            </p>
                            <p>
                                <strong>
                                    1: The potential ST project or delisted
                                    project situations.
                                </strong>
                            </p>
                            <p>
                                To provide a&nbsp;better&nbsp;user experience on
                                {projectName} Exchange (the “Exchange”), the Exchange
                                has set the special treatment rules
                                (“Rules”).&nbsp;Projects&nbsp;that are&nbsp;in
                                the following situations (“Negative Situations”)
                                will be designated as Special Treatment projects
                                or be delisted:
                            </p>
                            <p>
                                （1）The project applies to be delisted from
                                {projectName}.
                            </p>
                            <p>
                                （2）The project with low liquidity for a
                                certain period.
                            </p>
                            <p>
                                （3）The project’s technology has a security
                                issue.
                            </p>
                            <p>
                                （4）The project ceases or is likely
                                to&nbsp;end&nbsp;its operation or business
                                activities.
                            </p>
                            <p>
                                （5）The project stops or is likely to stop its
                                operations.
                            </p>
                            <p>
                                （6）The team may be at risk of being disbanded.
                            </p>
                            <p>
                                （7）The project is&nbsp;on the verge
                                of&nbsp;insolvency, order,&nbsp;or proceeding
                                for liquidation, bankruptcy,&nbsp;or similar is
                                taken, made, commenced against, or about the
                                above or any material part of its assets.
                            </p>
                            <p>
                                （8）The project is suspected of malicious
                                attempts or&nbsp;behaviors&nbsp;of
                                any&nbsp;type.
                            </p>
                            <p>
                                （9）The project or its team members (including
                                but not limited to founders)&nbsp;or consultants
                                are under investigation for a suspected breach
                                of or&nbsp;are&nbsp;convicted for an
                                actual&nbsp;violation&nbsp;of any applicable
                                laws, statutes,&nbsp;and regulations.
                            </p>
                            <p>
                                （10）The project carries out market misconduct
                                such as wash trading, market
                                manipulation,&nbsp;or insider trading.
                            </p>
                            <p>
                                （11）The project is regarded&nbsp;as&nbsp;high
                                risk according to the audit, the legal,&nbsp;and
                                the technical teams of Project.
                            </p>
                            <p>
                                （12）The project fails to inform {projectName} of
                                its material changes in its development, team
                                members, listed entities, and other information
                                required within the specified period.&nbsp;
                            </p>
                            <p>
                                （13）Any other situations Project may deem
                                risky for its users or the platform.
                            </p>
                            <p>
                                <strong>2: Important notifications.</strong>
                            </p>
                            <p>
                                （1）Once designated as “Special Treatment” by
                                the Exchange, as a warning, there will be a
                                special designation on the Project’s ticker
                                symbol during a specific observation period.
                                Special Treatment is a warning of potential
                                delisting. The ST Project shall be subject to
                                close observation and scrutiny during the
                                observation period.
                            </p>
                            <p>
                                （2）The {projectName} Exchange may delist the ST
                                Program if the Program fails to meet the basic
                                liquidity requirements by the end of the
                                observation period. Correspondingly, if the
                                basic liquidity is improved and exceeds the
                                requirement threshold by the end of the
                                observation period, the ST ticker symbol will be
                                removed.
                            </p>
                            <p>
                                （3）During the observation period, the {projectName}
                                Exchange may decide to delist the ST Project if
                                the {projectName} Exchange believes the ST Project
                                fails to take necessary actions to remedy the
                                Negative Situation. Nevertheless, in its sole
                                discretion and without prior notice,&nbsp;the
                                Exchange reserves the right&nbsp;to immediately
                                delist the ST Project if the {projectName} Exchange
                                believes circumstances warrant so.
                            </p>
                            <p>
                                （4）Upon being delisted by the Exchange, any
                                trade or deposit of the Plan will be suspended.
                                A new approval and listing procedure shall be
                                carried out if the delisted Program wants to be
                                listed on the {projectName} Exchange again. The
                                {projectName} Exchange reserves the right to modify
                                any term of these Rules without prior notice.
                                Shall you have any&nbsp;inquiries, please get in
                                touch with the account manager.
                            </p>
                            <p>
                                We hope this article has been helpful. If you
                                have any other questions, please reach out to
                                our 24/7 customer support
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Treatment;
