function calcularTempo() {
    const dataInicial = new Date("2023-11-19T21:00:00");
    const agora = new Date();
    const diffMs = agora - dataInicial;

    const segundosTotal = Math.floor(diffMs / 1000);
    const minutosTotal = Math.floor(segundosTotal / 60);
    const horasTotal = Math.floor(minutosTotal / 60);
    const diasTotal = Math.floor(horasTotal / 24);

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours() - dataInicial.getHours();
    let minutos = agora.getMinutes() - dataInicial.getMinutes();
    let segundos = agora.getSeconds() - dataInicial.getSeconds();

    if (segundos < 0) {
        minutos -= 1;
        segundos += 60;
    }
    if (minutos < 0) {
        horas -= 1;
        minutos += 60;
    }
    if (horas < 0) {
        dias -= 1;
        horas += 24;
    }
    if (dias < 0) {
        meses -= 1;
        let ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    if (meses < 0) {
        anos -= 1;
        meses += 12;
    }

    let semanas = Math.floor(dias / 7);
    dias = dias % 7;

    if (semanas >= 4) {
        meses += Math.floor(semanas / 4);
        semanas = semanas % 4;
    }

    document.getElementById("contador").innerHTML = 
        `${anos} ano(s), ${meses} mes(es), ${semanas} semana(s), ${dias} dia(s), 
         ${horas} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
}

calcularTempo();
setInterval(calcularTempo, 1000);
