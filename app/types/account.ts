export type MyAccountCardProps = {
    name: string
    email: string
    avatarUrl?: string
    facebookUrl?: string
    githubUrl?: string
    createdDate: string
}

export type UserType = {
    email: string;
    displayName: string;
    phoneNumber: string;
    avatar?: string;
    bio?: string;
    facebookUrl?: string;
    githubUrl?: string;
    gender: string;
    status: string;
    role: string;
    createdDate: string;
};

export type PersonalInfoProps = {
    gender: string
    bio?: string
    name: string
    phone: string
    email: string
    facebookUrl?: string
    githubUrl?: string
};

export type EditPersonalInfoModalProps = {
  isModalOpen: boolean;
  onClose: () => void;
  gender: string;
  name: string;
  phone: string;
  email: string;
  facebookUrl?: string;
  githubUrl?: string;
};