import { useState, useCallback } from 'react';

export const useCreateAppContext = function (props: any) {
  // Входные данные: ============================================================================================================

  //localStorage.clear();

  const menuArr = [
    { id: 0, name: 'Главная', link: '/' },
    { id: 1, name: 'Проекты', link: '/projects' },
    { id: 2, name: 'Блог', link: 'https://vc.ru/u/3674302' },
    { id: 3, name: 'Реквизиты', link: '/requisites' },
  ];

  // Контекст для приложения ====================================================================================================
  const [UserName, setUserName] = useState(
    props.UserName || localStorage.getItem('UserName') || 'Гость',
  );
  const toggleUserName = useCallback(
    (str: string): void => setUserName(str),
    [],
  );

  return {
    menuArr, // Массив меню

    UserName,
    toggleUserName, //
  };
};
