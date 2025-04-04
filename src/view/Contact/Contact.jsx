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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Imię"
            {...register("name", { required: "Imię jest wymagane" })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <textarea
            placeholder="Wiadomość"
            {...register("message", { required: "Wiadomość jest wymagana" })}
            className="w-full p-2 border rounded"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Wysyłanie..." : "Wyślij"}
          </button>

          {status === "sent" && (
            <p className="text-green-500">Wiadomość wysłana!</p>
          )}
          {status === "error" && (
            <p className="text-red-500">Błąd podczas wysyłania.</p>
          )}
        </form>
      </div>
    </>
  );
}
