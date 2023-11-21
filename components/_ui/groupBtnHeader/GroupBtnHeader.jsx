import ButtonSectionHeader from '../buttonSectionHeader/ButtonSectionHeader'
import './index.scss'

export default function GroupBtnHeader() {
    return (
        <>
            <section className="groupbtnsecheader">
                <div className="groupbtnsecheader__btns">
                    <ButtonSectionHeader
                        link="/institucional"
                        cor="#c90000"
                        src="/assets/icons/institucional.png"
                        alt="institucional"
                        titulo="institucional"
                    />
                    <ButtonSectionHeader
                        link="/estampador-de-sucesso"
                        cor="#4ee98c"
                        src="/assets/icons/estampador-de-sucesso.png"
                        alt="estampador"
                        titulo="estampador de sucesso"
                    />
                    <ButtonSectionHeader
                        link="/produto"
                        cor="#e9c64e"
                        src="/assets/icons/produto.png"
                        alt="produto"
                        titulo="produto"
                    />
                    <ButtonSectionHeader
                        link="/padrao-omega"
                        cor="#4e8ce9"
                        src="/assets/icons/padrao-omega.png"
                        alt="padrão ômega"
                        titulo="padrão ômega"
                    />
                    <ButtonSectionHeader
                        link="/revenda"
                        cor="#009a19"
                        src="/assets/icons/revenda.png"
                        alt="revenda"
                        titulo="revenda"
                    />
                    <ButtonSectionHeader
                        link="/atendimento"
                        cor="#e94e4e"
                        src="/assets/icons/atendimento.png"
                        alt="atendimento"
                        titulo="atendimento"
                    />
                    <ButtonSectionHeader
                        link="/nossos-canais"
                        cor="#0032b2"
                        src="/assets/icons/nossos-canais.png"
                        alt="nossos canais"
                        titulo="nossos canais"
                    />
                </div>
            </section>
        </>
    )
}