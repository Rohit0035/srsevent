import React from "react";

const EnquiryFormEvent = () => {
    return (
        <>
            <form action="#" className="rounded">
                <div className="row">
                    {/* Full Name */}
                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Full Name</label> */}
                        <input
                            type="text"
                            name="name"
                            className="form-control rounded-4"
                            placeholder="Enter your Full Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Email Address</label> */}
                        <input
                            type="email"
                            name="email"
                            className="form-control rounded-4"
                            placeholder="Enter your Email"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Phone Number</label> */}
                        <input
                            type="text"
                            name="phone"
                            className="form-control rounded-4"
                            placeholder="Enter Phone Number"
                        />
                    </div>

                    {/* Event Date */}
                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Event Date</label> */}
                        <input
                            type="date"
                            name="event_date"
                            className="form-control rounded-4"
                            placeholder="dd-mm-yyyy"
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Event Type</label> */}
                        <select name="eventType" className="form-select rounded-4">
                            <option>Select an Event Type</option>
                            {/* Corporate Events */}
                            <option>Corporate Management</option>
                            <option>Inauguration Planners</option>
                            <option>Conferences and Seminar Event</option>
                            <option>Corporate Outdoor Events</option>
                            <option>Hospitality and Wellness Management</option>
                            <option>Award Ceremony</option>

                            {/* Wedding & Personal Events */}
                            <option>Wedding Planners</option>
                            <option>Destination Wedding</option>
                            <option>Engagement Planners</option>
                            <option>Birthday Planners</option>
                            <option>Baby Shower</option>
                            <option>Wedding Anniversary</option>
                            <option>Housewarming Event</option>
                        </select>
                    </div>

                    {/* Event Location */}
                    <div className="col-md-6 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Event Location</label> */}
                        <input
                            type="text"
                            name="event_location"
                            className="form-control rounded-4"
                            placeholder="Enter your Event Location "
                        />
                    </div>

                    {/* Relation */}
                    <div className="col-md-12 mb-3">
                        {/* <label style={{fontSize:'12px'}} className="form-label text-white mb-1 text-start w-100">Relation</label> */}
                        <select name="relation" className="form-select rounded-4">
                            <option>Select a Relation</option>
                            <option>Friend</option>
                            <option>Family</option>
                            <option>Colleague</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* WhatsApp Checkbox */}
                    <div className="col-md-12 mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="whatsapp"
                            />
                            <label className="form-check-label text-start w-100 text-white" htmlFor="whatsapp">
                                Send me updates on WhatsApp
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-md-12">
                        <button type="submit" className="btn theme-btn bg-black w-100">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default EnquiryFormEvent;
