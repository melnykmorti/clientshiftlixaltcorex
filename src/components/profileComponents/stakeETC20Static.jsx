import React from "react";
import stateSaver from "../../mobx/stateSaver";
import { projectName } from "../../App";

const StakeETC20Static = () => {
    const { setError3LVLOpened } = stateSaver;
    return (
        <main className="main padding-null webp other">
            <section className="staking-home">
                <div className="staking-home__container">
                    <div className="staking-home__box">
                        <div className="staking-home__left">
                            <div className="staking-home__title">
                                Participate in ETH2.0 staking
                            </div>
                            <div className="staking-home__description">
                                with lower barriers and stable returns
                            </div>
                        </div>
                        <div className="staking-home__right">
                            <div className="staking-home__img">
                                <picture>
                                    <source srcSet="/assets/img/other/stakeeth20.png" />
                                    <picture>
                                        <source srcSet="/assets/img/other/stakeeth20.png" />
                                        <img
                                            src="/assets/img/other/stakeeth20.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="staking-convert">
                <div className="staking-convert__container">
                    <div className="staking-convert__box">
                        <div className="staking-convert__wrapper">
                            <div className="staking-convert__title">
                                Conversion ratio
                            </div>
                            <div className="staking-convert__ratio">
                                1ETH:1BETH
                            </div>
                            <div className="staking-convert__subtitle">
                                Low/medium risk <span /> Start at 0.1ETH
                            </div>
                        </div>
                       
                        <div className="staking-convert__wrapper">
                            <span
                                className="staking-convert__link butafor__btn"
                                onClick={() => setError3LVLOpened(true)}
                                style={{ cursor: "pointer" }}
                            >
                                One-click convert
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="staking-flow">
                <div className="staking-flow__container">
                    <div className="staking-flow__title">Shiftlix flow</div>
                    <div className="staking-flow__steps">
                        <div className="staking-flow__step">
                            <div className="staking-flow__step-number">1</div>
                            <div className="staking-flow__step-title">
                                Stake ETH
                            </div>
                            <div className="staking-flow__step-description">
                                Stake at least 0.1 ETH
                            </div>
                        </div>
                        <div className="staking-flow__step staking-flow__step-two">
                            <div className="staking-flow__step-number">2</div>
                            <div className="staking-flow__step-title">
                                Earn returns
                            </div>
                            <div className="staking-flow__step-description">
                                {projectName} issues BETH as the staking proof at a
                                ratio of 1:1. The staking return will be
                                distributed at 11:30 (+8 UTC) every day.
                            </div>
                        </div>
                        <div className="staking-flow__step">
                            <div className="staking-flow__step-number">3</div>
                            <div className="staking-flow__step-title">
                                Redeem ETH
                            </div>
                            <div className="staking-flow__step-description">
                                You can redeem your ETH once the Shanghai
                                Upgrade enables staking withdrawals, which is
                                expected to happen 6 - 12 months after the
                                Merge. You'll then be able to swap BETH to ETH
                                on a 1:1 basis.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="staking-highlights">
                <div className="staking-highlights__container">
                    <div className="staking-highlights__title">
                    ShiftLix highlights
                    </div>
                    <div className="staking-highlights__items">
                        <div className="staking-highlights__item">
                            <div className="staking-highlights__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/staking-highlights/returns.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/staking-highlights/returns.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/staking-highlights/returns.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="staking-highlights__item-wrapper">
                                <div className="staking-highlights__item-title">
                                    Stable returns
                                </div>
                                <div className="staking-highlights__item-description">
                                    Don't just hold. Earn an additional 5%-20%
                                    locking return.
                                </div>
                            </div>
                        </div>
                        <div className="staking-highlights__item">
                            <div className="staking-highlights__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/staking-highlights/barriers.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/staking-highlights/barriers.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/staking-highlights/barriers.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="staking-highlights__item-wrapper">
                                <div className="staking-highlights__item-title">
                                    Low barriers to entry
                                </div>
                                <div className="staking-highlights__item-description">
                                {projectName} will cover the spending on ETH 2.0
                                    nodes and maintenance so you can participate
                                    with just 0.1 ETH. {projectName} will distribute
                                    all the returns generated to the
                                    participants.
                                </div>
                            </div>
                        </div>
                        <div className="staking-highlights__item">
                            <div className="staking-highlights__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/staking-highlights/upgrade.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/staking-highlights/upgrade.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/staking-highlights/upgrade.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="staking-highlights__item-wrapper">
                                <div className="staking-highlights__item-title">
                                    Contribute to ETH upgrade
                                </div>
                                <div className="staking-highlights__item-description">
                                    Witness the upgrade of ETH mainnet
                                </div>
                            </div>
                        </div>
                        <div className="staking-highlights__item">
                            <div className="staking-highlights__item-img">
                                <picture>
                                    <source
                                        srcSet="../assets/img/staking-highlights/policy.webp"
                                        type="image/webp"
                                    />
                                    <picture>
                                        <source
                                            srcSet="../assets/img/staking-highlights/policy.webp"
                                            type="image/webp"
                                        />
                                        <img
                                            src="../assets/img/staking-highlights/policy.png"
                                            alt=""
                                        />
                                    </picture>
                                </picture>
                            </div>
                            <div className="staking-highlights__item-wrapper">
                                <div className="staking-highlights__item-title">
                                    Flexible exit policy
                                </div>
                                <div className="staking-highlights__item-description">
                                    {projectName} supports BETH spot trading. If you
                                    don't want to hold BETH, you can sell it at
                                    any time. The BETH spot price is determined
                                    by the market and may differ from ETH's spot
                                    price.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StakeETC20Static;
