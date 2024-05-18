import { AboutText } from "@/components/AboutText"
import { FaGithub, FaLinkedin } from "react-icons/fa"



export default function About() {
    return (
        <div className="px-4 pt-3">
            <AboutText 
                title="About Us"
                firstText="Hello Everyone! The DNS Health Checker is a powerful and user-friendly tool for checking the online availability of websites. By combining the robustness of Next.js on the frontend and the efficiency of GoLang on the backend, we offer a reliable solution for monitoring the accessibility of your favorite sites."
                secondText="Our goal is to simplify the process of monitoring website availability, providing users with a seamless and effective experience. We want to ensure that you are always aware of the online status of your digital assets, so you can act swiftly in case of issues."
            />
            <section className="p-3 text-justify text-lg">
                <h2 className="text-3xl font-bold text-orange-500 text-center">Key Features</h2>
                <ul className="text-white list-disc list-inside mt-2">
                    <li><strong>Real-Time Site Checking:</strong> Leveraging our API developed in GoLang, we can swiftly and accurately check the status of any site.</li>
                    <li><strong>User-Friendly Interface:</strong> With Next.js on the frontend, we have crafted an intuitive and responsive interface that makes navigating and using the application a breeze.</li>
                    <li><strong>Custom Notifications:</strong> Stay informed about the status of your favorite sites through personalized notifications, ensuring you never miss a critical change.</li>
                </ul>
            </section>
            <section className="p-3 text-justify text-lg">
                <h2 className="text-3xl font-bold text-orange-500 text-center">Why Choose DNS Health Checker?</h2>
                <ul className="text-white list-disc list-inside mt-2">
                    <li><strong>Reliability:</strong> Our application is built with robust, tested technologies to ensure reliable operation under all circumstances.</li>
                    <li><strong>Efficiency:</strong> Thanks to the combination of Next.js and GoLang, we offer a highly efficient solution that consumes fewer resources and delivers quick results.</li>
                    <li><strong>Ease of Use:</strong> With a simple and intuitive interface, our application is accessible to everyone, from novice users to experienced professionals.</li>
                </ul>
            </section>
            <AboutText 
                title="Join Us!"
                firstText="We are committed to providing the best possible experience for our users. If you have any questions, suggestions, or feedback, please do not hesitate to get in touch with us. Your input is essential for the continuous improvement of our application."
                secondText="Thank you for choosing DNS Health Checker!"
            />
            <div className="flex justify-center items-center">
                <section className="px-6 py-4 bg-sky-950 rounded-lg w-1/3">
                    <h2 className="text-xl font-bold text-orange-500 mb-2 text-center">Social Media</h2>
                    <ul className="text-white list-inside flex flex-col gap-2 items-center">
                        <li className="flex items-center gap-3">
                            Matthew Araujo <div className="flex items-center gap-2 text-xl"><a href="https://github.com/MatthewAraujo/health-checker-website" target="_blank" className="hover:scale-110"><FaGithub /></a> <a href="https://www.linkedin.com/in/matthewaraujo20/" target="_blank" className="hover:scale-110"><FaLinkedin /></a></div>
                        </li>
                        <li className="flex items-center gap-3">
                            Gabriel Nascimento <div className="flex items-center gap-2 text-xl"><a href="https://github.com/bielnascf/health-checker-website-frontend" target="_blank" className="hover:scale-110"><FaGithub /></a> <a href="https://www.linkedin.com/in/gabriel-nascimento-484450255/" target="_blank" className="hover:scale-110"><FaLinkedin /></a></div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}