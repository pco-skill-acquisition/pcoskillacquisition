'use client';

import { useApplyModal } from '../context/ApplyModalContext';
import ApplyModal from './ApplyModal';

export default function ApplyModalWrapper() {
  const { isOpen, prefilledSkill, closeModal } = useApplyModal();

  return (
    <ApplyModal
      isOpen={isOpen}
      onClose={closeModal}
      prefilledSkill={prefilledSkill}
    />
  );
}
