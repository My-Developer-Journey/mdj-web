import { UserType } from '@/app/types/account';
import { useEffect, useRef } from 'react';

type EditPersonalInfoModalProps = Pick<UserType, 
  'displayName' | 'bio' | 'gender' | 'phoneNumber' | 'email' | 'facebookUrl' | 'githubUrl'
> & {
    isModalOpen: boolean;
    onClose: () => void;
};

const EditPersonalInfoModal = ({
    isModalOpen,
    onClose,
    // gender,
    // bio,
    displayName,
    // phoneNumber,
    // email,
    // facebookUrl,
    // githubUrl,
}: EditPersonalInfoModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, onClose]);
    if (!isModalOpen) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        ref={modalRef}
        className="bg-white px-8 py-6 rounded-lg shadow-lg w-1/2 max-h-[40rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-semibold mb-1">Edit Your Personal Information</h1>
          <p className="text-gray-500">Provide details about yourself and social informations</p>
        </div>

        {/* Scrollable Content */}
        <form className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <input
  type="text"
  defaultValue={displayName || ""}
  placeholder="Enter your last name"
  className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
/>
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input type="text" defaultValue="Bozorgi" className="border border-gray-500 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
          <div className="col-span-2 relative">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              defaultValue="mehrabbozorgi.business@gmail.com"
              className="input-field pr-10"
            />
            <span className="absolute right-3 top-9 text-green-600 font-bold text-xl">✔</span>
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Address</label>
            <input type="text" defaultValue="33062 Zboncak isle" className="input-field" />
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Contact Number</label>
            <input type="text" defaultValue="58077.79" className="input-field" />
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <select className="input-field">
              <option>Mehrab</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">State</label>
            <select className="input-field">
              <option>Bozorgi</option>
            </select>
          </div>
          <div className="col-span-2 relative">
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" defaultValue="sdbfbnd65sfdvb s" className="input-field pr-10" />
            <span className="absolute right-3 top-9 text-green-600 font-bold text-xl">✔</span>
          </div>
        </form>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-gray-200 flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Close
          </button>
          <button
            disabled
            className="bg-black text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPersonalInfoModal;