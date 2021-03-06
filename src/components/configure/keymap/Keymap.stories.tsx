import React from 'react';
import './Keymap.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import KeyboardModel from '../../../models/KeyboardModel';
import KeyModel from '../../../models/KeyModel';
import Keycap from '../keycap/Keycap';
import { IKeymap } from '../../../services/hid/Hid';
import { KeyOp } from '../../../gen/types/KeyboardDefinition';
import { LunakeyMiniKeymap } from '../../../assets/keymaps/LunakeyMiniKeymap';
import { SilverBullet44KaiKeymap } from '../../../assets/keymaps/SilverBullet44KaiKeymap';
import { Iso105Keymap } from '../../../assets/keymaps/Iso105Keymap';
import { ErgoDoxKeymap } from '../../../assets/keymaps/ErgoDoxKeymap';
import { CorneliusKeymap } from '../../../assets/keymaps/CorneliusKeymap';
import { ZincKeymap } from '../../../assets/keymaps/ZincKeymap';
import { Aleth42Keymap } from '../../../assets/keymaps/Aleth42Keymap';
import { OptionChoiceKeymap } from '../../../assets/keymaps/OptionChoiceKeymap';
import { CrkbdKeymap } from '../../../assets/keymaps/CrkbdKeymap';
import { Jisplit89Keymap } from '../../../assets/keymaps/Jisplit89Keymap';
import { Naked64SFKeymap } from '../../../assets/keymaps/Naked64SFKeymap';
import { MOD_LEFT } from '../../../services/hid/Composition';
import { HotdoxKeymap } from '../../../assets/keymaps/HotdoxKeymap';

export default {
  title: 'Keyboards',
};
type KeycapData = {
  model: KeyModel;
  keymap: IKeymap;
  remap: IKeymap | null;
};
type KeymapType = ((string | KeyOp)[] | { name: string })[];
type OptionsType = { option: string; optionChoice: string }[];
const genKeyboardView = (km: KeymapType, options?: OptionsType) => {
  const kbd = new KeyboardModel(km);
  const { keymaps, width, height, left } = kbd.getKeymap(options);

  const marginLeft = left != 0 ? Math.abs(left) + 20 : 0;
  const keycaps: KeycapData[] = [];
  keymaps.forEach((model: KeyModel) => {
    const keymap: IKeymap = {
      isAny: true,
      code: 0,
      kinds: [],
      direction: MOD_LEFT,
      modifiers: [],
      keycodeInfo: { label: model.pos, code: 0, name: { long: '', short: '' } },
    };
    const remap = null;
    keycaps.push({ model, keymap, remap });
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="keyboards">
        <div
          className="keyboard-root"
          style={{
            width: width + 40,
            height: height + 40,
            padding: 20,
            borderWidth: 1,
            borderColor: 'gray',
            borderStyle: 'solid',
          }}
        >
          <div
            className="keyboard-frame"
            style={{
              width: width,
              height: height,
              marginLeft: marginLeft,
            }}
          >
            {keycaps.map((keycap: KeycapData) => {
              return keycap.model.isDecal ? (
                ''
              ) : (
                <Keycap
                  key={keycap.model.pos}
                  selectedLayer={0}
                  onClickKeycap={() => {}}
                  {...keycap}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{
          width: Math.max(1280, width),
          margin: '24px auto',
        }}
      >
        <textarea
          style={{
            fontSize: 14,
            width: '100%',
            padding: 8,
            lineHeight: 1.6,
            border: '1px solid #ccc',
          }}
          rows={km.length}
          defaultValue={km.map((row) => format(JSON.stringify(row))).join('\n')}
        />
      </div>
    </React.Fragment>
  );
};

const format = (text: string): string => {
  text = text.replace(/"([a-z]{1,2}?2*)":/g, '$1: ');
  text = text.replace(/,"/g, ', "');
  text = text.replace(/,{/g, ', {');
  text = text.replace(/,([a-z])/g, ', $1');
  return text;
};

export const LunakeyMini = () => genKeyboardView(LunakeyMiniKeymap);
export const Crkbd = () => genKeyboardView(CrkbdKeymap);
export const Jisplit89 = () => genKeyboardView(Jisplit89Keymap);
export const Naked64SF = () => genKeyboardView(Naked64SFKeymap);
export const SilverBullet44Kai = () => genKeyboardView(SilverBullet44KaiKeymap);
export const Cornelius = () => genKeyboardView(CorneliusKeymap);
export const Aleth42 = () => genKeyboardView(Aleth42Keymap);
export const Hotdox = () => genKeyboardView(HotdoxKeymap);
export const Zinc = () =>
  genKeyboardView(ZincKeymap, [{ option: '0', optionChoice: '0' }]);
export const ZincSymmetrical = () =>
  genKeyboardView(ZincKeymap, [{ option: '0', optionChoice: '1' }]);
export const OptionChoice0 = () =>
  genKeyboardView(OptionChoiceKeymap, [
    { option: '0', optionChoice: '0' },
    { option: '1', optionChoice: '0' },
    { option: '2', optionChoice: '0' },
    { option: '3', optionChoice: '0' },
    { option: '4', optionChoice: '0' },
  ]);
export const OptionChoice1 = () =>
  genKeyboardView(OptionChoiceKeymap, [
    { option: '0', optionChoice: '1' },
    { option: '1', optionChoice: '1' },
    { option: '2', optionChoice: '1' },
    { option: '3', optionChoice: '1' },
    { option: '4', optionChoice: '1' },
  ]);
export const OptionChoice2 = () =>
  genKeyboardView(OptionChoiceKeymap, [
    { option: '0', optionChoice: '1' },
    { option: '1', optionChoice: '1' },
    { option: '2', optionChoice: '1' },
    { option: '3', optionChoice: '1' },
    { option: '4', optionChoice: '2' },
  ]);
export const OptionChoice3 = () =>
  genKeyboardView(OptionChoiceKeymap, [
    { option: '0', optionChoice: '1' },
    { option: '1', optionChoice: '1' },
    { option: '2', optionChoice: '1' },
    { option: '3', optionChoice: '1' },
    { option: '4', optionChoice: '3' },
  ]);
export const Iso105 = () => genKeyboardView(Iso105Keymap);
export const ErgoDox = () => genKeyboardView(ErgoDoxKeymap);
