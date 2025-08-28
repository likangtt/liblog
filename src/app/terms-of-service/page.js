'use client'

import { Layout } from '@/components/Layout'

export default function TermsOfService() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to Massage Chair Review. These terms and conditions outline the rules and regulations for the use of our website.
          </p>
          <p className="mb-4">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Massage Chair Review if you do not accept all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise stated, Massage Chair Review and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may view and/or print pages from this website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from this website</li>
            <li>Sell, rent, or sub-license material from this website</li>
            <li>Reproduce, duplicate, or copy material from this website</li>
            <li>Redistribute content from Massage Chair Review (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Comments</h2>
          <p className="mb-4">
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data. Massage Chair Review does not screen, edit, publish, or review Comments prior to their appearance on the website, and Comments do not reflect the views or opinions of Massage Chair Review, its agents, or affiliates. Comments reflect the view and opinion of the person who posts such views or opinions. To the extent permitted by applicable laws, Massage Chair Review shall not be responsible or liable for the Comments or for any loss, cost, liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          </p>
          <p className="mb-4">
            Massage Chair Review reserves the right to monitor all Comments and to remove any Comments that it considers in its absolute discretion to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Content Liability</h2>
          <p className="mb-4">
            We shall have no responsibility or liability for any content appearing on your website. You agree to indemnify and defend us against all claims arising out of or based upon your website. No link(s) may appear on any page on your website or within any context containing content or materials that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
          </p>
          <p className="mb-4">Nothing in this disclaimer will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links</h2>
          <p className="mb-4">
            Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Massage Chair Review. Please note that Massage Chair Review does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Disclosure</h2>
          <p className="mb-4">
            This website contains affiliate links, which means we may receive a commission if you click on a link and purchase something that we have recommended. While clicking these links won't cost you any extra money, they will help us keep this site up and running. Please note that we only recommend products that we believe will be of value to our readers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Advertising</h2>
          <p className="mb-4">
            This website displays advertisements, including Google AdSense advertisements. By using this website, you consent to the use of cookies for advertisement purposes. You can opt out of personalized advertising by visiting Google's Ads Settings.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these terms at any time. By continuing to access or use our website after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-4">
            Email: info@massagechairreview.shop
          </p>
        </div>
      </div>
    </Layout>
  )
}