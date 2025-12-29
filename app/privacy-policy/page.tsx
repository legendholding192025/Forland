import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="w-full bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20" style={{ maxWidth: '1200px' }}>
          <div className="mb-8 lg:mb-12">
            <h1
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 5vw, 48px)',
                lineHeight: '120%',
                letterSpacing: '0%',
                color: '#000000',
                marginBottom: '16px'
              }}
            >
              Privacy Policy
            </h1>
            <p
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 2vw, 18px)',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#666666'
              }}
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'Effra, Arial, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '180%',
              color: '#000000'
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              Here at Legend Commercial Vehicles ("We"), we are committed to protecting and respecting your privacy.
            </p>
            <p style={{ marginBottom: '24px' }}>
              This policy (together with our Website Terms of Use and any other documents referred to in it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting www.forland.ae you are accepting and consenting to the practices described in this Policy.
            </p>
            <p style={{ marginBottom: '32px' }}>
              For the purpose of the Data Protection Act 1998 ("the Act") and the General Data Protection Regulation 2016 (GDPR), the data controller is you, the Customer, ("You") to whom Legend Commercial Vehicles (the data processor) provides the receipt reading services ("the Services").
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              INFORMATION WE COLLECT FROM YOU
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We will collect and process the following data about you:
            </p>

            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: '120%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Information you give us.
            </h3>
            <p style={{ marginBottom: '24px' }}>
              This is information about you that you give us by filling in forms on our site www.forland.ae ("our Site") or by corresponding with us by phone or e-mail. It includes information you provide when you register to use our Site, subscribe to and/or order the Services, and when you report a problem with our Site. The information you give us may include your name, address, e-mail address and phone number, financial and payment information, personal details and proof of identity.
            </p>

            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: '120%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Information we collect about you.
            </h3>
            <p style={{ marginBottom: '16px' }}>
              With regard to your visits to our Site we will automatically collect the following information:
            </p>
            <ul style={{ marginLeft: '24px', marginBottom: '24px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '12px' }}>
                technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, and operating system and platform;
              </li>
              <li style={{ marginBottom: '12px' }}>
                information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs).
              </li>
            </ul>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              COOKIES
            </h2>
            <p style={{ marginBottom: '32px' }}>
              Our Site uses cookies to distinguish you from other users of our Site. This helps us to provide you with a good experience when you browse our Site and also allows us to make improvements to it from time to time.
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              USES MADE OF THE INFORMATION
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We use information held about you in the following ways:
            </p>

            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: '120%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Information you give to us.
            </h3>
            <p style={{ marginBottom: '16px' }}>
              We will use this information:
            </p>
            <ul style={{ marginLeft: '24px', marginBottom: '24px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '12px' }}>
                to carry out our obligations arising from any contracts (including the terms of promotions we may run from time to time) entered into between you and us and to provide you with the information, products and services that you request from us;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to provide you, or permit selected third parties to provide you, with information about goods we feel may interest you. We (or they) will contact you by electronic means only if you have consented to this. If you do not want us to use your data in this way, or to pass your details on to third parties for marketing purposes, please tick the relevant box situated on the registration form on which we collect your data;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to notify you about changes to our service;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to ensure that content from our Site is presented in the most effective manner for you and for your computer.
              </li>
            </ul>

            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: '120%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Information we collect about you.
            </h3>
            <p style={{ marginBottom: '16px' }}>
              We will use this information:
            </p>
            <ul style={{ marginLeft: '24px', marginBottom: '24px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '12px' }}>
                to administer our Site and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to improve our Site to ensure that content is presented in the most effective manner for you and for your computer;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to allow you to participate in interactive features of our service, when you choose to do so;
              </li>
              <li style={{ marginBottom: '12px' }}>
                as part of our efforts to keep our Site safe and secure;
              </li>
              <li style={{ marginBottom: '12px' }}>
                to measure or understand the effectiveness of advertising we serve to you and others, and (only if applicable) to deliver relevant advertising to you; and
              </li>
              <li style={{ marginBottom: '12px' }}>
                to make suggestions and recommendations to you and other users of our Site about goods or services that may interest you or them.
              </li>
            </ul>

            <h3
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: '120%',
                color: '#000000',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Information we receive from other sources.
            </h3>
            <p style={{ marginBottom: '32px' }}>
              We will combine this information with information you give to us and information we collect about you. We will use this information and the combined information for the purposes set out above (depending on the types of information we receive).
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              DISCLOSURE OF YOUR INFORMATION
            </h2>
            <p style={{ marginBottom: '24px' }}>
              You agree that we have the right to share your personal information with:
            </p>
            <ul style={{ marginLeft: '24px', marginBottom: '24px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '12px' }}>
                Any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.
              </li>
              <li style={{ marginBottom: '12px' }}>
                Selected third parties including:
                <ul style={{ marginLeft: '24px', marginTop: '8px', listStyleType: 'circle' }}>
                  <li style={{ marginBottom: '8px' }}>
                    our business partners, suppliers and sub-contractors for the performance of any contract we enter into with them or you;
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. We do not disclose information about identifiable individuals to our advertisers, but we will provide them with aggregate information about our users (for example, we may inform them that 150 women aged under 30 have clicked on their advertisement on any given day). We may also use such aggregate information to help advertisers reach the kind of audience they want to target (for example, women in a particular US State). We may make use of the personal data we have collected from you to enable us to comply with our advertisers' wishes by displaying their advertisement to that target audience; and
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    analytics and search engine providers that assist us in the improvement and optimization of our Site.
                  </li>
                </ul>
              </li>
            </ul>
            <p style={{ marginBottom: '16px' }}>
              We will disclose your personal information to third parties:
            </p>
            <ul style={{ marginLeft: '24px', marginBottom: '24px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '12px' }}>
                In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.
              </li>
              <li style={{ marginBottom: '12px' }}>
                If Legend Commercial Vehicles, or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.
              </li>
              <li style={{ marginBottom: '12px' }}>
                If we are under a duty to disclose or share your personal data in order to comply with any legal obligation.
              </li>
              <li style={{ marginBottom: '12px' }}>
                By Sharing your info, you are accepting to receive promotional offers and information from Legend Commercial Vehicles and partners under Legend Holding Group, via Email, SMS, Phone & Whatsapp.
              </li>
            </ul>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              WHERE WE STORE YOUR PERSONAL DATA
            </h2>
            <p style={{ marginBottom: '24px' }}>
              All information you provide to us is stored on secure cloud storage systems provided by Tsohost.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Where we have given you (or where you have chosen) a password which enables you to access certain parts of our Site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
            </p>
            <p style={{ marginBottom: '32px' }}>
              Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              YOUR RIGHTS
            </h2>
            <p style={{ marginBottom: '24px' }}>
              You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. We will not process your information and data without your express consent. You can also contact us at any time in relation to your Privacy rights by emailing us at <a href="mailto:commercial.sales@legendmotorsuae.com" style={{ color: '#DF0011', textDecoration: 'underline' }}>commercial.sales@legendmotorsuae.com</a> or writing to us at Customer Services, Legend Commercial Vehicles, Plot 59 22nd St - Al Quoz, Al Quoz Industrial Area 2 - Dubai, UAE.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Our Site may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check those policies before you submit any personal data to those websites.
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              ACCESS TO INFORMATION
            </h2>
            <p style={{ marginBottom: '32px' }}>
              The Act gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request will be subject to a fee of 50 AED to meet our costs in providing you with details of the information we hold about you.
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              CHANGES TO OUR PRIVACY POLICY
            </h2>
            <p style={{ marginBottom: '32px' }}>
              Any changes we make to our Privacy Policy in the future will be posted on this page and, where appropriate, notified to you by e-mail. Please check back frequently to see any updates or changes to our Privacy Policy.
            </p>

            <h2
              style={{
                fontFamily: 'Effra, Arial, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '120%',
                color: '#DF0011',
                marginTop: '48px',
                marginBottom: '24px'
              }}
            >
              CONTACT
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Questions, comments and requests regarding this Privacy Policy are welcomed and should be addressed to:
            </p>
            <div style={{ marginBottom: '32px', padding: '24px', backgroundColor: '#F5F5F5', borderRadius: '8px' }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Email:</strong>{' '}
                <a href="mailto:commercial.sales@legendmotorsuae.com" style={{ color: '#DF0011', textDecoration: 'underline' }}>
                  commercial.sales@legendmotorsuae.com
                </a>
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>Phone:</strong>{' '}
                <a href="tel:8001234567" style={{ color: '#DF0011', textDecoration: 'underline' }}>
                  800 123 4567
                </a>
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>Address:</strong><br />
                Customer Services, Legend Commercial Vehicles<br />
                Plot 59 22nd St - Al Quoz<br />
                Al Quoz Industrial Area 2 - Dubai, UAE
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

