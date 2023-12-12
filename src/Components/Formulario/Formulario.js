import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import "../Formulario/Formulario.css";
const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: '',
            direccion: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div className="form-re">
        <section class="form-register">
        <h2 className="tamño">REGISTRO</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="controls">
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} className="space" placeholder="ingrese tu nombre" />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div className="controls">
                
                <input type="text" {...register('direccion', {
                    required: true
                })} placeholder="Ingrese la Direccion"/>
            </div>
            <div className="controls">
                
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} className="centrar" placeholder="Ingrese el Correo" />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div className="controls">
                
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} placeholder="Cuantos años tienes"/>
                {errors.edad && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div className="controls">
                <label>País</label>
                <select {...register('pais')}>
                    <option value="es">Boliva</option>
                    <option value="it">Argentina</option>
                    <option value="fr">Brasil</option>
                </select>
            </div>
            <div className="controls">
                <label>¿Incluir teléfono?</label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div className="controls">
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input class="botons" type="submit" value="Enviar" />
        </form>
        </section>
    </div>
}
export default Formulario;