import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | VURA-INSURE',
  description: 'VURA-INSURE Cookie Policy. Information about the cookies and tracking technologies used on vura-insure.com and how to manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-label mb-4 inline-flex">
            <Shield className="w-3.5 h-3.5" /> Legal
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 mb-3">Cookie Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: 10 April 2025 | Effective: 10 April 2025</p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-12 article-body">
          <p>
            This Cookie Policy explains how VURA-INSURE Ltd (&quot;VURA-INSURE,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies on our website at vura-insure.com (the &quot;Website&quot;). By continuing to use our Website after we inform you about cookies, you consent to our use of cookies in accordance with this policy.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They enable the website to remember information about your visit, such as your preferred language, your login status, and other settings that make your next visit easier and the website more useful to you.
          </p>
          <p>
            Similar technologies include web beacons, pixel tags, and local storage, which are used for analogous purposes. In this policy, we refer to all of these technologies collectively as &quot;cookies.&quot;
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the operation of our Website and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. Without these cookies, the Website would not function properly.
          </p>
          <ul>
            <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser, used to maintain your session as you navigate the Website</li>
            <li><strong>Security cookies:</strong> Used to identify you as a logged-in user and protect your session from unauthorised access</li>
          </ul>

          <h3>Performance and Analytics Cookies</h3>
          <p>
            These cookies allow us to count visits and understand how visitors interact with our Website, helping us to improve performance and user experience. All information collected is aggregated and anonymous.
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> We use Google Analytics to understand how users interact with our Website. Google Analytics collects information such as pages visited, time spent on the Website, and the source of visits.</li>
          </ul>

          <h3>Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalisation, such as remembering your preferences, language settings, and region. They may be set by us or by third-party providers whose services we have added to our Website.
          </p>

          <h3>Targeting and Advertising Cookies</h3>
          <p>
            These cookies may be set through our Website by our advertising partners, including Google AdSense. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They work by uniquely identifying your browser and device.
          </p>
          <ul>
            <li><strong>Google AdSense:</strong> We display advertisements via Google AdSense, which uses cookies to serve adverts based on your prior visits to our Website and other websites.</li>
          </ul>

          <h2>3. How to Manage Cookies</h2>
          <p>
            You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our Website may no longer be fully accessible.
          </p>
          <p>
            <strong>Browser controls:</strong> Most browsers allow you to manage cookie preferences through the browser settings. You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies. For more information, please refer to your browser&apos;s help documentation:
          </p>
          <ul>
            <li>Google Chrome: chrome://settings/cookies</li>
            <li>Mozilla Firefox: about:preferences#privacy</li>
            <li>Safari: Preferences &gt; Privacy</li>
            <li>Microsoft Edge: edge://settings/privacy</li>
          </ul>
          <p>
            <strong>Google Analytics opt-out:</strong> You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.
          </p>
          <p>
            <strong>Google AdSense opt-out:</strong> You can opt out of personalised advertising by visiting adssettings.google.com.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Our Website may include content from third-party websites and services, such as social media platforms, video providers, and advertising networks. These third parties may set their own cookies when you interact with their content. We do not control these third-party cookies, and you should review the privacy and cookie policies of those third parties for more information.
          </p>

          <h2>5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at <strong>privacy@vura-insure.com</strong> or write to VURA-INSURE Ltd, Privacy Team, 1 Fintech Square, London, EC2V 8RF.
          </p>
        </div>
      </div>
    </div>
  );
}
