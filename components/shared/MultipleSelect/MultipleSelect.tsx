import { Arrow, Divider, InputText, Label, Select } from 'components';
import { FC } from 'react';
import { Genre } from 'types';
import { useMultipleSelect } from './useMultipleSelect';

const MultipleSelect: FC<{
  genres: Genre[];
  selected?: Genre[];
}> = ({ genres: data, selected }) => {
  const {
    labelClicked,
    genresList,
    handlePop,
    handleSelect,
    labelRef,
    genres,
    lang,
    t,
  } = useMultipleSelect(data, selected);

  return (
    <Select
      face={
        <div>
          <div className='flex items-center cursor-pointer gap-4 w-full px-4 py-[.625rem] border border-app-dark-gray rounded-[.25rem] hover:border-white lg:text-xl text-base leading-9'>
            <div className='text-xl text-app-gray'>
              {genres?.length ? (
                <Label
                  genres={genres}
                  cb={handlePop}
                  labelRef={labelRef}
                  className='mt-0 rounded-none'
                  modal
                />
              ) : (
                <span>აირჩიე ჟანრი</span>
              )}
            </div>
            <Arrow className='ml-auto' />
          </div>
          <InputText
            name='genres'
            value={JSON.stringify(genres?.map(({ id }: { id: number }) => id))}
            type='text'
            inputStyle='hidden'
            select
          />
        </div>
      }
      closeOnClick={false}
      intercept={labelClicked}
    >
      <div className='relative'>
        <div className='absolute overflow-hidden rounded-sm z-50 inset-x-0 top-0'>
          <ul className='bg-black max-h-96 overflow-y-auto'>
            {genresList?.map((g: Genre) => (
              <li
                key={g.id}
                onClick={() => handleSelect(g, g.id)}
                className='cursor-pointer hover:bg-white hover:bg-opacity-10'
              >
                <p className='p-4'>{g.name[lang]}</p>
                <Divider />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Select>
  );
};

export default MultipleSelect;
