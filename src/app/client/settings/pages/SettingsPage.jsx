import React from 'react';
import { useDispatch } from 'react-redux';
import { IonCard, IonCardContent } from '@ionic/react';

import usePageTitle from '../../../../hooks/usePageTitle';
import {
  setNavbarColor,
  setTextColor,
  setBackgroundColor,
  setSidebarColor,
  setContentColor,
} from '../store/actions';
import useTheme from '../../../../hooks/useTheme';
import colors from '../../../../theme/colors';
import SettingsColorChanger from '../components/SettingsColorChanger';

export default function SettingsPage() {
  usePageTitle('Settings');
  const { navbar, text, background, sidebar, content } = useTheme();
  const dispatch = useDispatch();

  const handleNavbarColorChange = e => dispatch(setNavbarColor(e.target.value));

  const handleTextColorChange = e => dispatch(setTextColor(e.target.value));

  const handleBackgroundColorChange = e =>
    dispatch(setBackgroundColor(e.target.value));

  const handleSidebarColorChange = e =>
    dispatch(setSidebarColor(e.target.value));

  const handleContentColorChange = e =>
    dispatch(setContentColor(e.target.value));

  return (
    <div>
      <IonCard color={content}>
        <IonCardContent>
          <SettingsColorChanger
            title={'Navbar color'}
            handleColorChange={handleNavbarColorChange}
            defaultValue={navbar}
            colors={colors}
          />

          <SettingsColorChanger
            title={'Text color'}
            handleColorChange={handleTextColorChange}
            defaultValue={text}
            colors={colors}
          />

          <SettingsColorChanger
            title={'Background color'}
            handleColorChange={handleBackgroundColorChange}
            defaultValue={background}
            colors={colors}
          />

          <SettingsColorChanger
            title={'Sidebar color'}
            handleColorChange={handleSidebarColorChange}
            defaultValue={sidebar}
            colors={colors}
          />

          <SettingsColorChanger
            title={'Content color'}
            handleColorChange={handleContentColorChange}
            defaultValue={content}
            colors={colors}
          />
        </IonCardContent>
      </IonCard>
    </div>
  );
}
