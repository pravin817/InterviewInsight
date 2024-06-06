import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#003B95] border-t border-[#535bf8] text-white relative bottom-0 z-[20]">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-between max-w-screen-2xl mx-auto px-10">
        <div className="flex flex-col gap-4 text-sm">
          <h6 className="text-base font-bold">Support</h6>
          <p className="text-white">Help Center</p>
          <p className="text-white">Get help with interview-related queries</p>
          <p className="text-white">InterviewInsight Cover</p>
          <p className="text-white">
            Supporting students with interview experiences
          </p>
          <p className="text-white">Report a concern</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h6 className="text-base font-bold">Community</h6>
          <p className="text-white">Join our community</p>
          <p className="text-white">Sharing interview experiences</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h6 className="text-base font-bold">Resources</h6>
          <p className="text-white">Interview preparation tips</p>
          <p className="text-white">Resume building</p>
          <p className="text-white">Mock interview sessions</p>
          <p className="text-white">Networking opportunities</p>
          <p className="text-white">Success stories</p>
          <p className="text-white">Job search guidance</p>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h6 className="text-base font-bold">InterviewInsight</h6>
          <p className="text-white">Newsroom</p>
          <p className="text-white">About us</p>
          <p className="text-white">Terms of service</p>
          <p className="text-white">Privacy policy</p>
        </div>
      </section>
      <hr className="bg-[#f7f7f7] mt-10 mb-6" />
      <section className="flex flex-row flex-wrap justify-between gap-10 px-10 max-w-screen-2xl mx-auto">
        <div className="flex flex-row flex-wrap items-center text-sm">
          <p className="text-white">© 2024 InterviewInsight, Inc.</p>
          <span className="p-3">·</span>
          <p className="text-white">Terms</p>
          <span className="p-3">·</span>
          <p className="text-white">Privacy</p>
          <span className="p-3">·</span>
          <p className="text-white">Your Privacy Choices</p>
        </div>
        <div className="flex flex-row gap-5 min-w-[120px] items-center text-sm">
          <p className="text-white">English (US)</p>
          <FaFacebook className="w-6" size={23} />
          <FaLinkedin className="w-6" size={23} />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
