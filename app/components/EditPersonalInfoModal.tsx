
type EditPersonalInfoModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  gender: string; // <-- thêm dòng này nếu chưa có
  name: string;
  phone: string;
  email: string;
  facebookUrl?: string;
  githubUrl?: string;
};

const EditPersonalInfoModal = ({
    isModalOpen,
    onClose,
    gender,
    // bio,
    // name,
    // phone,
    // email,
    // facebookUrl,
    // githubUrl,
}: EditPersonalInfoModalProps) => {
    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--primary-black)]/50 transition-all duration-300 min-w-[80rem] max-w-[100rem] mx-auto">
            <div className="bg-[var(--primary-white)] px-[3rem] py-[2.5rem] rounded-lg shadow-lg w-1/2 h-[40rem] flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-2xl font-semibold mb-1">Edit Your Personal Information</h1>
                    <h1 className="text-md font-md text-gray-500">Provide details about yourself and social informations</h1>
                </div>

                {/* Scrollable Content */}
                <div
                    style={{
                        overflowY: 'auto',
                        paddingRight: '0.5rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                    className="flex-1"
                >
                    <div className="text-sm mb-2">Gender: {gender}</div>
                </div>

                {/* Fixed Footer */}
                <div className="pt-4 mt-4 border-t border-gray-200 shadow-[0_-6px_6px_-6px_rgba(0,0,0,0.1)] flex justify-between">
                    <button
                    onClick={onClose}
                    className="bg-gray-400 text-[var(--primary-white)] px-4 py-2 rounded-md hover:bg-gray-500 transition-all cursor-pointer"
                    >
                        Close
                    </button>
                    <button
                        disabled
                        className="bg-black text-white px-4 py-2 rounded-md transition-all cursor-not-allowed opacity-50 hover:bg-black"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPersonalInfoModal;