import { useState } from "react";
import Appstore from "../../assets/Appstore.svg";
import Playstore from "../../assets/Playstore.svg";

export default function MembershipsHero() {
  const [step, setStep] = useState("question");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
    setShowModal(true);
  }, 1500);


  const url = "https://script.google.com/macros/s/AKfycbx-0mHvKWH1yx9q1Y6EcHwHRn9Tr1CbekRv7bLAG--kH7sTkXc-4IaIuXgkw0did0Sz/exec";
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Mobile=${e.target.mobile.value}&DOB=${e.target.dob.value}&Gender=${e.target.gender.value}&Country=${e.target.country.value}&PostalCode=${e.target.postalCode.value}&Discord=${e.target.discord.value}`)
    }).then(res=>res.text()).then(data=>{
      console.log(data)
    }).catch(error=>console.log(error))
};
  

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center font-poppins overflow-hidden bg-[#f8fafc] px-4 py-10">

      {/* 🔲 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

      {/* 🌈 GLOW EFFECT (with animation) */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-300/30 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-purple-300/30 blur-[120px] animate-pulse"></div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8">

        {/* STEP 1 */}
        {step === "question" && (
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Get Started with Your Membership
            </h1>

            <p className="text-gray-600">
              Do you have a Discord account?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep("form")}
                className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90 cursor-pointer"
              >
                Yes, I have
              </button>

              <button
                onClick={() => setStep("guide")}
                className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 cursor-pointer"
              >
                No, I don’t
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: GUIDE */}
        {step === "guide" && (
          <div className="space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              Create Your Discord Account
            </h1>

            <p className="text-gray-600 text-center">
              Discord is where our community lives. You can chat, practice speaking,
              and connect with other learners in real time.
            </p>

            <div className="grid gap-3">
              <a
                href="https://discord.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-black text-white rounded-xl text-center hover:opacity-90 cursor-pointer"
              >
                Create Discord Account
              </a>

              <a
                href="https://www.youtube.com/results?search_query=how+to+create+discord+account"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border border-gray-300 rounded-xl text-center hover:bg-gray-100 cursor-pointer"
              >
                Watch Tutorial
              </a>
            </div>

            <div className="space-y-3">

                {/* TEXT LINE */}
                <p className="text-sm text-gray-600 text-center">
                    If you're using a phone, download the Discord app.
                </p>
                <div className="h-2"></div>
                <div className="grid grid-cols-2 gap-3">

                    {/* GOOGLE PLAY */}
                    <a
                    href="https://play.google.com/store/apps/details?id=com.discord"
                    target="_blank"
                    >
                    <img
                        src={Playstore}
                        alt="Google Play"
                        className="h-15 w-auto mx-auto"
                    />
                    </a>

                    {/* APP STORE */}
                    <a
                    href="https://apps.apple.com/app/discord/id985746746"
                    target="_blank"
                    >
                    <img
                        src={Appstore}
                        alt="App Store"
                        className="h-15 w-auto mx-auto"
                    />
                    </a>

                </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("question")}
                className="w-full py-3 border rounded-xl cursor-pointer"
              >
                Back
              </button>

              <button
                onClick={() => setStep("form")}
                className="w-full py-3 bg-black text-white rounded-xl cursor-pointer"
              >
                I’ve Created My Account
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: FORM */}
        {step === "form" && (
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* HEADER */}
                <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                </div>

                <h1 className="text-2xl font-semibold text-gray-800">
                Membership Form
                </h1>

                {/* FULL NAME */}
                <div className="space-y-1">
                    <label className="text-sm text-gray-600 mb-4">Full Name</label>
                    <div className="h-2"></div>
                    <input
                        type="text"
                        required
                        placeholder="John Doe"
                        name="name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                </div>

                {/* EMAIL */}
                <div className="space-y-1">
                <label className="text-sm text-gray-600">Email Address</label>
                <div className="h-2"></div>
                <input
                    type="email"
                    required
                    placeholder="youremail@gmail.com"
                    name="email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                />
                </div>

                {/* MOBILE + DATE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-1">
                    <label className="text-sm text-gray-600">Mobile Number</label>
                    <div className="h-2"></div>
                    <input
                    type="tel"
                    required
                    placeholder="01234567890"
                    name="mobile"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600">Date of Birth</label>
                    <div className="h-2"></div>
                    <input
                    type="date"
                    required
                    name="dob"
                    max={new Date(new Date().setFullYear(new Date().getFullYear() - 5))
                        .toISOString()
                        .split("T")[0]}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                </div>
                </div>

                {/* GENDER */}
                <div>
                <p className="text-sm text-gray-600 mb-2">Gender</p>
                
                <div className="flex gap-6 text-sm">
                    <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Male" defaultChecked />
                    Male
                    </label>
                    <label className="flex items-center gap-2">
                    <input type="radio" name="gender" value="Female"/>
                    Female
                    </label>
                </div>
                </div>



            
                {/* COUNTRY + POSTAL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-1">
                    <label className="text-sm text-gray-600">Country</label>
                    <div className="h-2"></div>
                    <select 
                    name="country"
                    defaultValue="" 
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="" disabled>Select Country</option>                    
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>

                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Egypt">Egypt</option>

                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Greece">Greece</option>

                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>

                        <option value="Japan">Japan</option>

                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mexico">Mexico</option>

                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="New Zealand">New Zealand</option>

                        <option value="Pakistan">Pakistan</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>

                        <option value="Qatar">Qatar</option>

                        <option value="Russia">Russia</option>

                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>

                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>

                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>

                        <option value="Vietnam">Vietnam</option>
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="text-sm text-gray-600">Postal Code</label>
                    <div className="h-2"></div>
                    <input
                    type="text"
                    name="postalCode"
                    placeholder="1234"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                </div>
                </div>

                {/* DISCORD */}
                <div className="space-y-1">
                    <label className="text-sm text-gray-600">Discord Username</label>
                    <div className="h-2"></div>
                    <input
                        type="text"
                        required
                        name="discord"
                        placeholder="username#1234"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                    />
                </div>

                {/* SUBMIT */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 cursor-pointer rounded-xl text-white font-medium 
                    bg-gradient-to-r from-purple-500 to-indigo-500 
                    hover:opacity-90 transition flex items-center justify-center"
                    >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Submit →"
                    )}
                </button>

            </form>
        )}

        {/* STEP 4 */}
        {step === "success" && (
          <div className="text-center space-y-6">
            <h1 className="text-2xl font-bold">
              You’re All Set 🎉
            </h1>

            <p className="text-gray-600">
              Click below to join the Discord community.
            </p>

            <a
              href="https://discord.gg/CPfQXf5nWX"
              target="_blank"
              className="inline-block px-6 py-3 bg-black text-white rounded-xl cursor-pointer"
            >
              Join Discord Server
            </a>
          </div>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center space-y-5">

            <h2 className="text-2xl font-bold">Registration Successful 🎉</h2>

            <p className="text-gray-600">
              Your registration has been submitted successfully.
            </p>

            <button
              onClick={() => {
                setShowModal(false);
                setStep("success");
              }}
              className="w-full py-3 bg-black text-white rounded-xl cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </section>
  );
}