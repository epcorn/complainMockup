import { useState } from 'react';
import ActionTaken from './ActionTaken';
import ModalButton from './ModalButton';

const TwoColumnForm = () => {
    const [complementMode, setComplementMode] = useState('email'); // State to track complement mode

    const [showPhoneFields, setShowPhoneFields] = useState(false); // State to track whether phone fields should be displayed

    const [showInspect, setShowInspect] = useState(false);

    // Function to handle complement mode change
    const handleComplementModeChange = (mode) => {
        setComplementMode(mode);
        if (mode === 'phone') {
            setShowPhoneFields(true);
        } else {
            setShowPhoneFields(false);
        }
        if (mode === 'inspection') {
            setShowInspect(true);
        } else {
            setShowInspect(false);
        }
    };

    return (
        <div className=" max-w-3xl mx-auto  p-16 shadow-lg rounded-lg">
            <div className="mb-4 max-w-md mx-auto">
                <label htmlFor="contractNo" className="block mb-2 font-bold text-blue-600">Contract No</label>
                <input
                    type="text"
                    id="contractNo"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter ContractNo"
                />
            </div>

            <div className='flex'>
                {/* First Column */}
                <div className="w-1/2 pr-4">
                    {/* Bill To */}
                    <div className="mb-4">
                        <label htmlFor="billToName" className="block mb-2 font-bold">Bill To</label>
                        <input
                            type="text"
                            id="billToName"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label htmlFor="billToAddress" className="block mb-2 font-bold">Address</label>
                        <input
                            type="text"
                            id="billToAddress"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter address"
                        />
                    </div>
                </div>

                {/* Second Column */}
                <div className="w-1/2 pl-4">
                    {/* Ship To */}
                    <div className="mb-4">
                        <label htmlFor="shipToName" className="block mb-2 font-bold">Ship To</label>
                        <input
                            type="text"
                            id="shipToName"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <label htmlFor="shipToAddress" className="block mb-2 font-bold">Address</label>
                        <input
                            type="text"
                            id="shipToAddress"
                            className="w-full px-3 py-2 border rounded-md"
                            placeholder="Enter address"
                        />
                    </div>
                </div>
            </div>

            {/* Complement Mode */}
            <div>
                <div className="w-full">
                    <label htmlFor="complementMode" className="block mt-4 mb-1 font-bold text-blue-600">Complain Mode</label>
                    <div className="mb-4">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="complementMode"
                                value="email"
                                checked={complementMode === 'email'}
                                onChange={() => handleComplementModeChange('email')}
                                className="form-radio"
                            />
                            <span className="ml-2">Email</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                name="complementMode"
                                value="phone"
                                checked={complementMode === 'phone'}
                                onChange={() => handleComplementModeChange('phone')}
                                className="form-radio"
                            />
                            <span className="ml-2">Phone</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="complementMode"
                                value="inspection"
                                checked={complementMode === 'inspection'}
                                onChange={() => handleComplementModeChange('inspection')}
                                className="form-radio"
                            />
                            <span className="ml-2">Inspection</span>
                        </label>
                    </div>

                    {/* Additional Phone Fields */}
                    {showPhoneFields && (
                        <div>
                            <div className="mb-4">
                                <label htmlFor="callDate" className="block mb-2 font-bold">Date</label>
                                <input
                                    type="date"
                                    id="callDate"
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="callerDetails" className="block mb-2 font-bold">Caller Details</label>
                                <input
                                    type="text"
                                    id="callerDetails"
                                    className="w-full px-3 py-2 border rounded-md"
                                    placeholder="Enter caller details"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-2 font-bold">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    className="w-full px-3 py-2 border rounded-md"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                    )}
                    {showInspect && (
                        <div>
                            <div className="mb-4">
                                <label htmlFor="inspector" className="block mb-2 font-bold">Inspector name</label>
                                <input
                                    type="text"
                                    id="inspector"
                                    className="w-full px-3 py-2 border rounded-md"
                                    placeholder="Enter inspector name"
                                />
                            </div>
                            <div>
                                <label htmlFor="reading" className="block mb-2 font-bold">Reading</label>
                                <input
                                    type="tel"
                                    id="reading"
                                    className="w-full px-3 py-2 border rounded-md"
                                    placeholder="Readings...."
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* complain details */}
            <div>
                <label htmlFor="complainDetails" className="block mt-4 mb-1 font-bold text-blue-600">Complain Details</label>
                <div className="mb-4">
                    <label htmlFor="problem" className="block mb-2 font-bold">What is the problem?</label>
                    <input
                        type="text"
                        id="problem"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter problem"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="problemLocation" className="block mb-2 font-bold">Where is the problem?</label>
                    <input
                        type="text"
                        id="problemLocation"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter problem location"
                    />
                </div>
                <div>
                    <label htmlFor="moreDetails" className="block mb-2 font-bold">More Details</label>
                    <textarea
                        id="moreDetails"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter more details"
                        rows="4"
                    ></textarea>
                </div>
            </div>
            <ActionTaken />

            <div className='flex items-center justify-between gap-2'>
                <ModalButton label={"Generate ticket"} mesg={"Here, ticket will be generated!"} bg={"bg-green-300"} hbg={"hover:bg-green-500"} />
                <ModalButton label={"Print"} mesg={"Here, we print the document "} bg={"bg-blue-300"} hbg={"hover:bg-blue-500"} />
                <ModalButton label={"Email"} mesg={"Here, email will be sent "} bg={"bg-yellow-300"} hbg={"hover:bg-yellow-500"} />
            </div>

        </div>
    );
};

export default TwoColumnForm;
