import { useCallback, useState } from "react";

import { User } from "../types/api/user";

//idの情報を元にuser情報を探すフック
type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
