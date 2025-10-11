import { FaMapLocationDot } from "react-icons/fa6";
import { HiCurrencyBangladeshi } from "react-icons/hi";

const HotJobsCard = ({ job }) => {
    const { responsibilities, currency, company, requirements, description, salaryRange, title, category, company_logo, location, jobType, } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex gap-3 m-2">
                <figure>
                    <img
                        className="w-18"
                        src={company_logo}
                        alt="Logo" />
                </figure>
                <div>
                    <h2 className="text-2xl">{company}</h2>
                    <p className="flex items-center gap-2"><FaMapLocationDot /> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-3">
                    {
                        requirements.map(requirement =>
                            <p className="text-center border p-1 rounded-md  hover:text-pink-600"
                            >{requirement}
                            </p>)
                    }
                </div>
                <div className="card-actions justify-end items-center">
                    <p className="flex items-center gap-1">Salary : <HiCurrencyBangladeshi /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                    <button className="btn btn-primary mt-2">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;