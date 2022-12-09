import React from 'react'
import FormInput from '../UI/FormInput'
import FormNumberInput from '../UI/FormNumberInput'
import FormSelect from '../UI/FormSelect'
import FormTextArea from '../UI/FormTextArea'
import { useForm } from 'react-hook-form'

export default function TestDriveForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
        // reset
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            mail: '',
            age: '',
            model: 'Shelby',
            message: '',
            radio: '',
            checkbox: true,
        },
    })
    const watchFile = watch("files");
    const onSubmit = (data) => {
        console.log(data)

    }
    return (
        <section className="test-drive">
            <div className='test-drive__container container'>
                <div className="test-drive__center">
                    <div className="test-drive__form form">
                        <h1>Форма отправки заявки на Тест Драйв</h1>
                        <form onSubmit={handleSubmit(onSubmit)} action='#' id='td-form' className='td-form'>
                            <FormInput register={register('name', { required: true, pattern: /^[A-Za-z]+$/i, minLength: { value: 3, message: 'Не меньше 3 символов' } })} child='Имя*' placeholder='Ваше имя на английском' />
                            <div className="form__warn">
                                {errors?.name && <span>{errors?.name?.message || "Поле обязательно к заполнению!"}</span>}
                            </div>
                            <FormNumberInput register={register('age', { required: true, min: { value: 18, message: 'Вам должно быть больше 18 лет' } })} child='Возраст*' placeholder='Вам должно быть больше 18 лет' />
                            <div className="form__warn">
                                {errors?.age && <span>{errors?.age?.message || "Поле обязательно к заполнению!"}</span>}
                            </div>
                            <FormSelect register={register('model')} child='Выберете модель' selected='Shelby' other={['Mach1', 'Mach 1 Premium', 'EcoBoost Fastback', 'EcoBoost Premium']} />
                            <FormInput register={register('mail', { required: true, pattern: /[^A-Za-z0-9_]+@?/ })} child='E-mail*' placeholder='Адрес электронной почты' />
                            <div className="form__warn">
                                {errors?.mail && <span>{errors?.mail?.message || "Поле обязательно к заполнению!"}</span>}
                            </div>
                            <div className="form__item">
                                <div className="options">
                                    <div className="form__label"><span>Хотите водить лично или нанять водителя?</span></div>
                                    <div className="options__item">
                                        <input  {...register("radio", { required: true })} value="accept" id='accept' className='options__input' type="radio" name='licence' defaultChecked />
                                        <label htmlFor="accept" className='options__label'><span>Вести Лично (при наличии водительских прав)</span></label>
                                    </div>
                                    <div className="options__item">
                                        <input {...register("radio", { required: true })} value="denied" id='denied' className='options__input' type="radio" name='licence' />
                                        <label htmlFor="denied" className='options__label'><span>С водителем (при отсутствии водительских прав)</span></label>
                                    </div>
                                </div>
                            </div>
                            <FormTextArea register={register("message")} htmlFor='message' placeholder='Опишите ваши пожелания' />
                            <div className="form__item">
                                <div className="form__label"><span>Прикрепите фото водительских прав при пункте (Вести лично) </span></div>
                                <div className="file">
                                    <div className="file__item">
                                        <input {...register("files")} type="file" className='file__input' />
                                        <div className="file__button">Выбрать</div>
                                    </div>
                                    {/* {watchFile && <div className="file__preview">{data.files[0]}</div>} */}
                                </div>
                            </div>
                            <div className="form__item">
                                <div className="checkbox">
                                    <input {...register("checkbox", { required: true })} id='agreement' type="checkbox" name='agreement' className='checkbox__input' />
                                    <label className='checkbox__label' htmlFor="agreement">Я даю свое согласие на обработку персональных данных, <br></br> в соответствии с условиями компании</label>
                                </div>
                                <div className="form__warn">
                                    {errors?.checkbox && <span>{errors?.checkbox?.message || "Подтвердите согласие на обработку"}</span>}
                                </div>
                            </div>
                            <input type='submit' className='form__button' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}