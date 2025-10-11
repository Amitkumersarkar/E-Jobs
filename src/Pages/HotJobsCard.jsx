import { FaMapLocationDot } from "react-icons/fa6";

const HotJobsCard = ({ job }) => {
    const { responsibilities, company, requirements, description, salaryRange, title, category, company_logo, location, jobType, } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex gap-3 m-2">
                <figure>
                    <img
                        className="w-18"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h2 className="text-2xl">{company}</h2>
                    <p className="flex items-center gap-2"><FaMapLocationDot /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;