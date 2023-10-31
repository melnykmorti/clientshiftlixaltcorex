import React from "react";
import { projectName, projectNameLink } from "../App";


const BugBounty=()=>{
return (<React.Fragment>
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
                            Bug Bounty Program

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
  <p>The safety of our users’ funds and personal data is our main priority, therefore, the security of our platform and services is the field we work on daily and implement a number of advanced security technologies. Nevertheless, the contribution of the security researchers, who assist us in keeping our products and users safe, is extremely important for us, that is why we launched a vulnerability detection bounty program. The terms and conditions of our bug bounty program are described in this Bug Bounty Policy.</p>
  <p><strong>Ineligibility</strong></p>
  <p>Vulnerabilities found in out of scope resources are unlikely to be rewarded unless they present a serious business risk (at our sole discretion). In general, the following vulnerabilities do not correspond to the severity threshold:</p>
  <p>WEB:</p>
  <ul>
    <li>Vulnerabilities in third-party applications</li>
    <li>Spam (SMS, email, etc)</li>
    <li>Best practices concerns without real security impact</li>
    <li>Recently (less than 30 days) disclosed vulnerabilities</li>
    <li>Vulnerabilities affecting users of outdated browsers or platforms</li>
    <li>Social engineering, phishing, physical, or other fraud activities</li>
    <li>Publicly accessible login panels without proof of exploitation</li>
    <li>Reports that state that software is out of date/vulnerable without a proof of concept</li>
    <li>Vulnerabilities involving active content such as web browser add-ons</li>
    <li>Most brute-forcing issues without clear impact</li>
    <li>Theoretical issues</li>
    <li>Missing HTTP security headers without real security impact</li>
    <li>TLS/SSL сertificates related issues</li>
    <li>DNS issues (i.e. MX records, SPF records, etc.)</li>
    <li>Server configuration issues (i.e., open ports, TLS, etc.)</li>
    <li>Open redirects</li>
    <li>Session fixation</li>
    <li>User account enumeration</li>
    <li>Clickjacking/Tapjacking and issues only exploitable through clickjacking/tap jacking</li>
    <li>Descriptive error messages (e.g. Stack Traces, application or server errors)</li>
    <li>Self-XSS that cannot be used to exploit other users</li>
    <li>Login &amp; Logout CSRF</li>
    <li>Weak Captcha/Captcha Bypass without clear impact</li>
    <li>Lack of Secure and HTTPOnly cookie flags</li>
    <li>Username/email enumeration via Login/Forgot Password Page error messages</li>
    <li>CSRF in forms that are available to anonymous users (e.g. the contact form)</li>
    <li>OPTIONS/TRACE HTTP method enabled</li>
    <li>Host header issues without proof-of-concept demonstrating the vulnerability</li>
    <li>Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS</li>
    <li>Content Spoofing without embedded links/HTML</li>
    <li>Reflected File Download (RFD) without clear impact</li>
    <li>Mixed HTTP Content</li>
    <li>HTTPS Mixed Content Scripts</li>
    <li>DoS/DDoS issues</li>
    <li>Manipulation with Password Reset Token</li>
    <li>MitM and local attacks</li>
    <li>Vulnerabilities already known to us, or already reported by someone else (reward goes to first reporter)</li>
    <li>Issues without any security impact</li>
  </ul>
  <p>MOBILE:</p>
  <ul>
    <li>Attacks requiring physical access to a user's device</li>
    <li>Vulnerabilities requiring extensive user interaction</li>
    <li>Exposure of non-sensitive data on the device</li>
    <li>Reports from static analysis of the binary without PoC that impacts business logic</li>
    <li>Lack of obfuscation/binary protection/root (jailbreak) detection</li>
    <li>Bypass certificate pinning on rooted devices</li>
    <li>Lack of Exploit mitigations i.e., PIE, ARC, or Stack Canaries</li>
    <li>Sensitive data in URLs/request bodies when protected by TLS</li>
    <li>OAuth &amp; app secret hard-coded/recoverable in IPA, APK</li>
    <li>Sensitive information retained as plaintext in the device’s memory</li>
    <li>Crashes due to malformed URL Schemes or Intents sent to exported Activity/Service/Broadcast Receiver (exploiting these for sensitive data leakage is commonly in scope)</li>
    <li>Any kind of sensitive data stored in app private directory</li>
    <li>Runtime hacking exploits using tools like but not limited to Frida/Appmon (exploits only possible in a jailbroken environment)</li>
    <li>Any URIs leaked because a malicious app has permission to view URIs opened</li>
    <li>Exposure of API keys with no security impact (Google Maps API keys etc.)</li>
  </ul>
  <p><strong>Reward</strong></p>
  <p>There is no limit on the maximum and minimum reward size, we reserve the right to increase or decrease the size of the reward depending on the seriousness of the vulnerability found. Researchers are more likely to receive increased rewards if they can demonstrate how the found vulnerability may be used to cause the most harm.</p>
  <p>Remote code execution: $10,000</p>
  <p>Manipulating user balances: $10,000</p>
  <p>XSS/CSRF/Clickjacking affecting user balances/trading/exchange/deposits: $2,000</p>
  <p>Theft of information related to passwords/API keys/personal information: $2,000</p>
  <p>Partial authentication bypass: $1,500</p>
  <p>Other vulnerability with clear potential for financial or data loss: $500</p>
  <p>Other CSRF (excluding logout CSRF): $500</p>
  <p><strong>Rules and Guidelines to Report the Vulnerabilities and Get the Reward</strong></p>
  <p>Taking into account the illegal nature of unauthorized access to the computer systems, we agree not to take legal action against the researchers nor ask law enforcement bodies to investigate the cases of the security breach by the researchers in case they comply with the industry standards and responsible disclosure guidelines described in this section.</p>
  <p>1. Main points to receive a reward for detecting vulnerabilities:</p>
  <ul>
    <li>immediately submit a report to security@{projectNameLink}</li>
    <li>provide us with enough time to fix the vulnerability/weakness/issue before any information regarding it will become in any manner publicly announced</li>
    <li>NOT cause any damage to {projectName} infrastructure and its users</li>
    <li>NOT mislead users or employees of {projectName} while detecting vulnerabilities</li>
  </ul>
  <p>2. You must be the first to report a vulnerability to receive a reward.</p>
  <p>3. In case you find chain vulnerabilities we pay only for vulnerability with the highest severity.</p>
  <p>4. You should send a clear textual description of the work done, along with steps to reproduce the vulnerability.</p>
  <p>5. Responsible disclosure guidelines:</p>
  <ul>
    <li>Provide details of the vulnerability, including information needed to reproduce and validate the vulnerability.</li>
    <li>Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our services.</li>
    <li>Do not modify or access data that does not belong to you.</li>
    <li>Report the vulnerability as soon as possible.</li>
    <li>Do not use the detected vulnerabilities for unjust enrichment. If you use the vulnerability in such a way that can cause harm to {projectName}, our users and third parties and do not report to {projectName} about the vulnerability, you will not receive a reward and we reserve the right to commence legal action against you.</li>
  </ul>
  <p>Do not violate any law and stay in the defined scope, and do not participate in any illegal actions (activities).</p>
  <p>After sending a report, you cannot tell anyone or anywhere about the vulnerability. Public disclosure of a vulnerability makes it ineligible for a reward. Furthermore, you shall not store screenshots and/or executable codes and scripts related to the vulnerability not to make the information available to third parties.</p>
  <p><strong>Non-security Issues</strong></p>
  <p>You may let us know about non-security issues at&nbsp;security@{projectNameLink}</p>
</div>

                </section>
            </div>
        </main>
    </React.Fragment>)
}

export default BugBounty;