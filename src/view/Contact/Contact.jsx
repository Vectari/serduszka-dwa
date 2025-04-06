import { useState } from "react";
import { useForm } from "react-hook-form";
import { dictionary } from "../../dictionary";

const mailtoUrl = `${dictionary.main_info.email}`;
const phoneNumber = `${dictionary.main_info.phone_numer}`;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mgvanryo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Błąd podczas wysyłania formularza:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <div>
        <h3>Adres:</h3> Biuro Matrymonialne i Partnerskie
        <p>&quot;Serduszka Dwa&quot;</p>
        ul. Grundwaldzka 73/3
        <br /> 85-239 Bydgoszcz <h3>Kontakt:</h3>{" "}
        <a href={mailtoUrl}>{dictionary.main_info.email}</a>
        <br />
        <br />
        <a href={`tel:${phoneNumber}`}>{dictionary.main_info.phone_numer}</a>
      </div>
      <br />
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Imię"
            {...register("name", { required: "Imię jest wymagane" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <p>/^\d{9}$/</p>
          <input
            type="tel"
            placeholder="Numer kontaktowy"
            {...register("phoneNumber", {
              pattern: {
                value: /^\d{9}$/,
                message: "Nieprawidłowy format numeru",
              },
            })}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          <p>/^[^\s@]+@[^\s@]+\.[^\s@]+$/</p>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email jest wymagany",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Nieprawidłowy format emaila",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <textarea
            placeholder="Wiadomość"
            {...register("message", { required: "Wiadomość jest wymagana" })}
          />
          {errors.message && <p>{errors.message.message}</p>}

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Wysyłanie..." : "Wyślij"}
          </button>

          {status === "sent" && <p>Wiadomość wysłana!</p>}
          {status === "error" && <p>Błąd podczas wysyłania.</p>}
        </form>
      </div>
    </>
  );
}
