
import profilePicture from "../assets/profile.jpg";

function ProfileCard() {
  return (
    <section className="mx-auto my-8 w-full max-w-2xl rounded-2xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-900/10 transition duration-300 hover:shadow-2xl sm:my-10 sm:p-8">

      <div className="mb-6 flex justify-center">
        <img
          src={profilePicture}
          alt="Portrait of Tshuma Auxilia Chilongezyo"
          className="h-32 w-32 rounded-full border-4 border-blue-200 object-cover shadow-lg sm:h-40 sm:w-40"
        />
      </div>

      <h2 className="mb-5 text-center text-2xl font-extrabold leading-snug text-blue-950 sm:text-3xl">
        Tshuma Auxilia Chilongezyo
      </h2>

      <p className="text-base leading-8 text-slate-600">
        I am a software development student at uncommon.org who is
        passionate about technology, creativity, and solving
        problems. I enjoy building web applications, learning
        programming skills, and designing user-friendly
        digital experiences.
      </p>

      <h3 className="mb-4 mt-8 border-l-4 border-blue-500 pl-3 text-xl font-bold text-blue-700">
        My Skills
      </h3>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          HTML and CSS
        </li>
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          JavaScript
        </li>
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          React
        </li>
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          Python
        </li>
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          Django
        </li>
        <li className="rounded-lg bg-blue-50 p-3 font-medium text-slate-700 hover:bg-blue-100">
          UI/UX Design
        </li>
      </ul>
    </section>
  );
}

export default ProfileCard;
