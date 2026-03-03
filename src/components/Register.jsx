import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre_usuario: "",
        apellido_usuario: "",
        cedula_usuario: "",
        numero_celular_usuario: "",
        cargo_usuario: "",
        tipo_contrato_usuario: "",
        fecha_contrato_usuario: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
            alert("Debes iniciar sesión para registrar un nuevo usuario.");
            setLoading(false);
            return;
        }

        const { error } = await supabase.from("registros_empresa").insert([
            {
                cedula_usuario: formData.cedula_usuario,
                nombre_usuario: formData.nombre_usuario,
                apellido_usuario: formData.apellido_usuario,
                numero_celular_usuario: formData.numero_celular_usuario,
                cargo_usuario: formData.cargo_usuario,
                tipo_contrato_usuario: formData.tipo_contrato_usuario,
                fecha_contrato_usuario: formData.fecha_contrato_usuario,
                user_id: user.id
            }
        ]);
        if (error) {
            alert("Error al registrar el usuario: " + error.message);
        } else {
            alert("Usuario registrado exitosamente.");
            navigate("/admin");
        }
        setLoading(false);
    };
    return (
        <div className="container-registro">
            <h2>Completa tu perfil de empleado</h2>
            <form onSubmit={handleSubmit}>
                <input name="nombre_usuario" placeholder="Nombre" onChange={handleChange} required />
                <input name="apellido_usuario" placeholder="Apellido" onChange={handleChange} required />
                <input name="cedula_usuario" placeholder="Cédula" onChange={handleChange} required />
                <input name="numero_celular_usuario" placeholder="Número de celular" onChange={handleChange} required />
                <input name="cargo_usuario" placeholder="Cargo" onChange={handleChange} required />
                <input name="tipo_contrato_usuario" placeholder="Tipo de contrato" onChange={handleChange} required />
                <select name="tipo_contrato" onChange={handleChange} required>
                    <option value="">Selecciona el tipo de contrato</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Fijo">Fijo</option>
                    <option value="Hora labor">Hora labor</option>
                </select>
                <input name="fecha_contrato_usuario" type="date" onChange={handleChange} required />
                <button type="submit" disabled={loading}>
                    {loading ? "Guardando.." : "Finalizar Registro"}
                </button>
            </form>
        </div>
    );
}

export default Register;