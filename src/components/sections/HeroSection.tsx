// src/components/sections/HeroSection.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import {
    Building2, Calendar, Users, Shield, Briefcase,
    ArrowRight, Phone, Star,
    CheckCircle2, Sparkles, Factory, Wrench,
    ChevronLeft, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
}

const stats = [
    {
        value: "2021",
        label: "Tahun Berdiri",
        icon: <Calendar className="w-5 h-5" />,
        gradient: "from-navy to-navy-dark",
        textColor: "text-navy",
        bgColor: "bg-gradient-to-br from-navy/10 to-navy-dark/10"
    },
    {
        value: "100+",
        label: "Project Selesai",
        icon: <Briefcase className="w-5 h-5" />,
        gradient: "from-amber to-amber-dark",
        textColor: "text-amber",
        bgColor: "bg-gradient-to-br from-amber/10 to-amber-dark/10"
    },
    {
        value: "50+",
        label: "Tim Profesional",
        icon: <Users className="w-5 h-5" />,
        gradient: "from-teal to-teal-dark",
        textColor: "text-teal",
        bgColor: "bg-gradient-to-br from-teal/10 to-teal-dark/10"
    },
    {
        value: "24/7",
        label: "Support",
        icon: <Shield className="w-5 h-5" />,
        gradient: "from-maroon to-maroon-dark",
        textColor: "text-maroon",
        bgColor: "bg-gradient-to-br from-maroon/10 to-maroon-dark/10"
    }
]

const serviceHighlights = [
    { icon: <Factory className="w-5 h-5" />, text: "General Trading", color: "text-navy", bg: "bg-navy/10" },
    { icon: <Building2 className="w-5 h-5" />, text: "Engineering Construction", color: "text-amber", bg: "bg-amber/10" },
    { icon: <Wrench className="w-5 h-5" />, text: "Maintenance Services", color: "text-teal", bg: "bg-teal/10" },
    { icon: <Shield className="w-5 h-5" />, text: "Safety Certified", color: "text-maroon", bg: "bg-maroon/10" }
]

// Client logos data
const clientLogos = [
    {
        name: "Krakatau Steel",
        displayName: "KRAKATAU",
        subtitle: "STEEL",
        icon: "⚡",
        color: "text-teal-600",
        subtitleColor: "text-teal-800",
        bgColor: "bg-teal-50",
        imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPBg8PBxAPEhAQEhIVDxAQFhcWDxUSFhYYGBsWFhkaICggJCAnGxUZIz0hMSo3MC46Fx81RDM4NzQuMCsBCgoKDg0OGhAQGi0lICI3NzcrNy03NC03LTU3Nys3Nzc3Ly81LS01Ky0rLSstLSsuLS0rNy03NzUtLS0tLTU1Lf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcBBAYDAv/EAEAQAAEEAQICBgQKCQUBAAAAAAABAgMEBRESBiETIjFBUWEUMnGBFRZCU5GhorHB0QczNlJig7LS8ENygrPxI//EABoBAQACAwEAAAAAAAAAAAAAAAACBAMFBgH/xAApEQEAAgECBAUEAwAAAAAAAAAAAQIDBBEFITFREhMVYXEzQWKxIiMy/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAiOKrr4MFLLVXa9u3auiLpq5E7F9p7Ws2mIj7oZLxSs2npCXBUvxxv8Az/2Gf2nScN5qyuPmuZiVVgYmjG7WIrneWie73+RayaLJSN52a/DxXDlt4axLtgVVY40uulVYpGsavY1GtVET2qiqefxxv/P/AGGf2k/T8vsxTxrTxP3WyCr8bxFk7NpsVSXVy/wM0RPFer2FkUmPbVa2y/e9E679ETVfYhXzYJxcpmF3S6yuoiZpE7R3bIAMK2AAAAAAAAAAAAAAAAAAAAAMEDxz+y8/8v8AraTxA8dfsvP7Y/8AsaZcP1K/Kvq/oX+JVjice6zkGQw9rl5r4NTtUluLMm1zmVMfygr8k07HPTtX3fip9wv9AwW9OVm23q/vRw+PtX8vA5te03dY8y/inpHRyN58jF5cf6t1+OzBuYvHSWbbYqiauXtX5LU8VGJxslq42Kq3VV7V+S1PFS2MDhY6dRGQJq5f1j19Zy/l5ENVqoxRtHVl4fw+2ot4rcqw+cBhI6dXZCmr15ySL2uX8vIlgDR2tNp3nq67HjrjrFaxtEMgA8TAAAAAAAAAAAAAAAAAAAAAGCN4hZEuIk9O/VN2ueid6Ncjtvv0095JEBxz+zE/8v8AraTxRveI92HUW8OK09olWWUvPsXXyz9rl5J3Nb3NT2H1icZJauJHVT/c5fVa3xUzicXJZtbIOSJze9fUY1O9V/Alcnl44Ka1MEvU/wBaf5cju9E8v89u+tbb+vHHP9OOx44tvmzTy/betZqLHQpXwW18iKnTzqmqK5O7/Oz7uv4dzsdypuZykb+sj70Xy8inzZx16SvbbLVdo5v0KngvkYMuirav5d1vTcVtjyc4/j27LuBD8OZ2O7V3M6sjeUkfei+KeXmTBp7Vms7T1dTjyVyVi1Z3iWQARTAAAAAAAAAAAAAAAAAAAAAGFIziHHOtYl8MTkar1Z1l7E0ciry9iEmD2LTE7wjekXrNZ6Sr/J4O4lb0XEQbYE9dyvYkky/vO59nl/4kP8Tr/wAz9tn5lsAt01uSsbRENbk4ThyTvMyqb4m3/mfts/MfE2/8z9tn5lsgl6hl9mL0TT95Vfj+G8nXtNlqR7XN/jZoqeC8+wsilJI+q11pnRyKnXZqi6L7UNgFfNntl52iF7S6Oun3iszt7sgAwrYAAAAAAAAAAAAAFd5/jV1DiXINnc6RGwweiwfJ6RzdXKvfp3qWIczDw1rxhbu22xPjmhZHG1dVenV2v1RU05pyAiclbtV/0bTW1tulsyNjkSZumxu+RnVjTTs2rp7yMq5yVmToNxGTfefPKxtis5rXI2NU6z9zU5bSUfwhaThW9jYpIlhe9q0XPc7cxnSNerJOr3actNe1STz/AA06WrTdjehZZqTRSNevVRWtTRzNUTXRfwA8+O8jYalWlg37LVuTRr0+TExNznL9X1mtBxBLN+jaay1yttQwytlX5TZ4+Sr7exfee9/hJ1viaW1k5XtjbGyOoleR7JGpzV6vVETtVe41Y+DJoamUrUJGrXux6xdM9zpWzqmjlcunNF8e3kgGhh+J5MllqdOjYWNkUDJLUqcpZ5GtbujZqnYjl5r5L4HR8dZSWviGx412lq1LHDXVO1HOXm73N1+lDRvcIOTDUExCxRXKGxY380icuidI1yomujl1Xs+8983wxJez8EuQk2V68K9G2B7mzJYcqbnbtE5aJp7gPHhqexdwMta5ZliuVJ3RTzR7ekXaurVTVNNFav1GhwnXt2MrcSzkLStp2+ja3qaSNauvX5d/l4kthOF30eJJJqMjnVp4kSdsz3PnWZq9V+qpzTRVTmvep7YPCz1Zsm9FiV1qeSWumrtE1Tqo/ly5+GoHN5rie0ziaSxVevwdSnhr2Wppo5X673/8VVE+gn+IslLHxZiIq8ipFO6wkrU00ejWNVuv0kZS/RxH8COiyE9hZpUc6dY5XJA6V2q7tnYvPTt/dNmfhm2/FY5ySwpfx+qMc7c6B7VTbo7kjubWt5+32gbeRyEzePqVeN6pDJXmc+PuVzddF+o8OPr9qH0X0R8sNZz3emWII0kljbom3kvYirrz8vcqhhchJxVDdzbqaJBFIxrK3SKq7/Hf7SazS3tWfAaVFTn0npKyJ4abdnvAicBXSxRldQy1iwkjUaj/AP57ona66om3k7TuUhsfUuS8WXKTsncRldkLmvTo9672oq69XzJvhbh6aDL2rmTdAktlGIsVVqpC1G9/W5qq/ivibOOwskXF127I5ix2I4WsairvRWNRF15ad3iBy2c4h04ut18jkZqcNdsKQpDHuV7nsRzlcux3j9Z98RZx1ePFxNyEzK9lsz5buzWdzURHM5beXronZ4ExZwt+HiS1cwTqbm22xdIyz0iK10bdqbdnl94yuFvzWKFyN1Ntyp0yPjXpPRnNkTb1V9b1U+sCFyeWdHwdNZw2RsWV6eFnSyN2qzrJuaiK1O1HIWQcjl8Lfv8AD89fLLTjkV0boHQdIrNWLqqP3c/oJLFLk/TE+F0odFou5YFlWTXu03Jp2gTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==",
        hasImage: true
    },
    {
        name: "Astra International",
        displayName: "ASTRA",
        subtitle: "international",
        icon: "✈️",
        color: "text-blue-600",
        subtitleColor: "text-blue-800",
        bgColor: "bg-blue-50",
        imageUrl: "data:image/png;base64,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", hasImage: true
    },
    {
        name: "PT Cigading Habeam Centre",
        displayName: "CIGADING",
        subtitle: "HABEAM CENTRE",
        icon: "🏗️",
        color: "text-red-600",
        subtitleColor: "text-red-800",
        bgColor: "bg-red-50",
        imageUrl: "data:image/jpeg;base64,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",
        hasImage: true
    },
    {
        name: "Indorama Ventures",
        displayName: "INDORAMA",
        subtitle: "V E N T U R E S",
        icon: "🌟",
        color: "text-purple-600",
        subtitleColor: "text-purple-800",
        bgColor: "bg-purple-50",
        imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABelBMVEX///8ALXH//v8ALHIAKW8AI2v9//////0AIGoAKG90iKj5//8AJW1dc5UAHmgAFWMAAFiywdAAAEUAAEwAGGQAAFMAAEgAAFkAAE8ADVsAF2MAFWUAEV/p8/a3xM/w+/sAIWALLliYqbgAAECisr3E0tkACFhGXX/Q3OJkeZhKYIequMfd5+4ADFdrfpjM2ul6jaJTaIoAGF0AJWUAKmaMnrTk6euImrEAF0fd6fUSOW9Xa4b/8fv/5vHz0N7ZkqXCVW2sH0OmADGnACW/aH3dqLlldo7mvMy0ACS8AB28HUTBRWTkr8LVn7G/jqHs1tzLbZavfKWXgKhjanyKkZw1Tnu4LFedVYR0WY0bO2uuAB+bRndMPnWvMF1wQ3p1lL2cJ1syUoqMADskHmFBGFpdAEYqRHBIAEbYxNanu9YpRGm8t8qJob4cO3amx7Tt//S1v8Jamm7T9eIagUCHxJ1usYUkhUiz4c4bN1sAFEkAG0Y7T2sAIlcAACxRL875AAAO5klEQVR4nO2aCXfi1hWAJQSSsNhkwDYYISxbIBazGeyAZ7LXTZOZdBvakqRNJmlpM7Uz6aRJ6jT57733PUkIJGImPdM5p+d+sxikt9x3t3efZEEgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgtkUWBOVly/DCkSeA8bKleJE4u/X6rv6ypXiR6FlRzHVethQvknFGlM7+r700nRKTjZctxAtlmhQTl+5nJZRaZUGW/S+Kogj4V5AVv73g3o7du3//Xmylr7L2YW3oqCSuhC+uX5I3944YT4gJWlkSC9ZKl9jmHtHEXn3t9TfefOutN994+2f3fBl+bOIt5QuPdPfYIZyKKGar+Em7TKcHTmCUq3Q6bbE2g7TLzoUOIaus6CD28/fe+cU777732sMHDx6+//4v/Rtjr1e6eXGyHukyjp6+Clxp4ywDY2UVchdb9QOt+njhUtt6fbJQBRuWevh5UkwkCq3lPbOmpkpj/KTnEkAqlUqomWzuMpB4Yan3X4fl/erXv7n67aMT0I+tee4gzzKsF/7NFIpdMzit0MYx1Zoh+CtqZlOJRP1kpRWbOdtcLtopoSg5Z+sVCsIFpNIhU0kVtg0xZ/t3nKwkVqpumyVSomgFZHjw1ju/+/0f8tO+zVfQ2W2zn4qgDSWvC/6XmbtLVLCbBuEPZJeiyi28ou4IgYDRpnHonBkvxW0lcLTD9nOssKuK8TlTkVWQJDHV8tWlH4ri/gQ/DVJwo3RaKpUKCRhfqvtLFB5+8O6HHw1ntuYKHxPaeyyqFWFSB4kLp0C9EIdume5SL0I7y9aeXYpqMoUkp0HhxgVUT7nqX7D3WbdM0G/vQJ4lpUSTaa2r4hRgNVeFbKNEvWuzpJhM95B2c5iARmWHr0d48MEf/3QmfqxbyzjTpsUOJFuZ+URB7wCOPsNew6V7a3MwThxMthR1UkRrSzWvEejBOGXWL7FLMRSrlWLdUoNtc6kimKegkQs2XiOFwyVnXudmwrUoTuR7ijGAhScG3BKvfvDJR3HpJn8VjIuLUpNrqCBKJTcloJJQeV6KsrKidDOLi6mZ361aZivM6nzTkpnOmcVymherdg7c7DEoZ7R9qumAK5VZVWrcxFnMVLwadQ7WZbmuV2fSyVwnWiMlSafMZPfe+OSzuFhpBGs+sF2lZmLjK1WUaqh71JgO8hdc544JJsRXZnyRkcSh4O1OqBCYHgMRO8A/J8cWGJ/iN7b1NpJiKm1j9GxfZmI8cJ8zUIdgRjcqBa3kydQuQzJaWsmuiNJhFdfy2qefSVLpQhNWdjijDrlZRnEk8CZX/T0czQ86CPlkzaiCqHVfVDQYm97XFbhkHOyFQRRja66WUFgn6+1vW2GB5oaGKzgoCOKlwgVxwHKHLChB10G3wBwJThsT7n/6Z1igtTIeRk/9UIduxkhi/s/B+r7eC47QF2wU2MvdaJ9EH1Ja0XDDBNYTfwwuuRwEXB3iw6itptc7gGADL8ByzML4MiADJOf+5lGfoHEGKTfFKWwFMk6EefHhX8BF3QUGKjTjlGVIo+5ZDe/tJMSkW9/LzCHLhmAWJckX37iB2qoNoXlY5X1wPynZEDpoLza8DjbAnfAI5k8LWxZuMkZ7mn3sZ3BtuEVkLUxcmEpP0cO0RTy4TSmoShUD9MPPUKUhjDpbIWqo4ridOmA1bKvISsC6EI2ppteigkkThPB2AlBDojkpsUFwWkUG7TO3R43P5C1LP0wvbsaGdaQaggw/4lPcI9C6LCaMMxAo4Is4E/a599ekNJyEC8VeiZnuJHAqc+aQSvc9h2RFBvriAKZYuO5fhegenoNaki12xRhKUtHAqyN3EM+EwhhTmCHE5G2WuEylqFC0VBWvWLzEUNke3SlJYjbwEECrSMz9/laMq307ePbgWAWWB3ZAjpvP20B/UE+KUqHrZk0WR313qWLdYJYVTgqwWhlsLZVY7bPDrAmhE38iMPdBV0qwY14b6oDStnUb6qju4NToR4UTnsEkSPdmTXRjHFKpWAlkZzcFCX+/eVzpPQqPOUgVsfUCN59CFshAipTKDc1VOXiixOpRGNmriZlCwIWEOY87mESKj0whnWB7L66wDaJyh3X4zqNs5aaYSs/8VFrB2bAwglRlQCnALYcBOQocDUDbIu6H/Y9n0064fOrUklNNUHhJ6REf9r1kjCZUeX5xhpK/SWJw91lssDwJ5QfmdLiKAaLwKijJz7EQx5JbpdwNDJh8wqtSWEedrQMGl4YmpnfYBGX2ECCOge31wW1qDl8vPx/tVK9CQ/YzzLlRejFzeHgI9Tv07/ipD0woZtpVpA0RznIYr7HR9cFhoKqCnUKKzzSWk9xd1AILqNesmw5p1/PdO2BpEXyDV6WwJbAI6DEjtguSyC2HGY8rj6miA8YtoJovezXLupTditGb0ClJJUwpPZBoeK0DNSxLfH0bRbRs4TCbPcxiXR3nCkaFoMM6p7D3GrBeCU85GDqnLEC0ERbvKjr9ISvvptpWSzRHbPOUuWWSLS4nZGPpBrba+AIXpZ2Jyw0WXB/MLkENrQhXk+HJeGQ8ZQkkJvOny9oimVwwnYP/89oOixW36MNvCXGF+A1r5JR55QHOKJV60DlxiUVMxQtZq7zazfWvO8HUxb1AHnoOIwu9MtS3kCfYtgpzr6RSzA78MPLIGFntovPFU99+kBS7BW5CyBxSku8EGOF8KGiFVpFY/kGwsubZY5xxKw1Qb6o5lSRWzuFVcFYFTeimLbQ9BBSKtM0KbQg28A08zBXdCgRFTXM9g+Xgm1126y1eV0AijfMTzpfmk7Gznzb/8cwdDfaNnaxY4MdA9H/+wECG1OJaIoYmlM4+112uVS+d9VW+m2M+EKF2y+x4V5lu8KBYvva7FcRALfejYJocsoMAKhpPmnIMFY1GhATvVqVs92B0ujm4keMWPTd2WlqtVH321T+fPTXNZ99+YTQPRbWhsRPI0JNSxroWUyaqHB0icHzF7Zjn1VZKguYyxrGIHoQpQMG9g63EABMGyicT/ai1VTLtgyvxKhR30X1/S+AHM173Y9zd4MZtWY2Eiid8Lyjl6q7ZLwx7T7/+6qtvvvn6W3uRkTIzkxl7Ulr6BGYRPHYqzDuYOd1zIuwcEot++YA3l91nH1m+RcDnMlbxF1jILvd4PG3Gz7Yq23ixztcKovs66dTRhkyPWGeL8UKhXC7gzi3G2cMp94A1Hxu15HBsPH327KneKifjpa677aH/Z22+QhyCH796UB4FjvX8zgiXCkFSsVlrzHNuBLNa1eF1I/ow1wss7BL8OGds89zzlKUXbIcBHnjOBhUGq27BIw7E5c4tpSoLXl3yJTo/GNWclKnPW9N6NpGoL/xjG2RDMWe6R1f8wnwTpa8zyVz144Vyh5fpRe5CF9iTj4MHSFwImnB/mTtlVu6hQmJ3WXGSV9X9NrbTRhm1ElCuMVTV7CUKODlQEyojU6gMGzqbBnQisyff1X+Z4xwUtOVCoXSWDhxLuxU1c+o9MDdKmYxa1AT7QFVL/WD8jHOqWgRRrZyaqQksWdnFQsXVNV6FndQ4yKiHK4eY6j4IPo56YryGswMw99a68Kka2EHb8F332zAuTqqGzHXI/8M6p9Pv6NNS+np8YpveARL/jaHD8pSK37qOYOEPtJQfQfYOm5dN55ZvhmWN3Sr4hA9SdcVcrqfThCsn/83bXV+C0BDKSgLD2865aTUurS+/jHh/tVECJTKClqWhsmFyxnO8ddgsgDfM+mCy4L6VUVY7a4bpnaICL3JYm5iwfn0bIdZHWWkqe5/v9NLAq6bQKS8wTvBKULkh2WT2Zw1cYUxZkS5E2CqK7yyyEDXqBgk2EMOqcr2n98gizIbXWyFNbyNQ+HXeatMfGQtf9G11yuc8z0srv+2meFBWvyjRQbWpgz/FZpmUVV/6CSx7rihJkYNjPq9SlMDr1PBMoQP7asuQMrXtpq/esu3bua2uqQN2gSPkNpwftSddbFz9zgip0H7l6Gh+dPSdFeokH7Hi0/pODm/S/4Z5nlghgRXBeIIivGKHXVmzjr4/su5UMj7W22X18GC+/hZAFqq5CwtYX4UMlRQ+1xH6UNKtT+BY1k4WunVWe8AQxjE7oqWnYZmMYdOy0vl1rYC/nOf7KEKEkgdDS+/ute90I5g5j+9QnGM9vD9ZNTOqD5aWWXzx051F3rWG4VcmaPE8c5ZWM9zDycPJTJ6uvkxiVtP3NjxPYzdk8KUtImWAL5oGi4g7zXnERcQ6u96FCUY7kUGVPlq3Oj9V5tESRi3iTKfjgzl5erW+QtTWBiWPi0xfW0XiBZxk7L2otxyz2QlghEO8OzfnLUE7DgcbsoiwEojbHaGzGscRv3rVn5qyZu3a4V47IxThPNylMzpNtw136DvQdztCoxFxQ6ud3d7evhLxlm7WAC+xJ2GRELOGtWi44m8M2KujKLcbJGazaT78okURFme129vjqNdoxnixd6oL26zQyevOsR0yOKTSg02/6XYAwixaen4SugODdPI6Wn1tQxS0aR9/jutG2LfO0vp17nrtIttYvh+7o0YxaR3gnTtLVK1mDSLerUDi57pbT0AxOHBBVqwWH9ciX8Lau511oVBYo8ifVGB2Wtv3jANw98VifR2orWKUkvHB0SOce5zX7rYgMHucj0xYoG4TiFoDGq8V/K2UYLehse46+E2bjRzT7O5GBLyTh4vWQYTP28UeirCqLnx1pe+2Na1X64a7RNHPR5pQ6BZ3j49vIyLU+gFD3N7FZ92rimePlTdkYPt0L38Mjh9+stLG8Yy9CHGt4t7x8fEPa1fR52e7w+Hxtr80dG6HSxPEsZFOqCSHDuyIa59Hhrmz6Y2QWW1XIx9Sn7PfU3Hs8CbDRYgc0G7rz/Pros9RvvpN17PJ8m7EaHc9EovOFps6bXGE2WIot1AOn02WF7Z7tcXgv2WgKOsPCPwRN27dEXPIy6PsTz9ZEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEP9b/gOju3V9k6gAXAAAAABJRU5ErkJggg==",
        hasImage: true
    },
    {
        name: "Kota Cilegon",
        displayName: "KOTA",
        subtitle: "CILEGON",
        icon: "🏛️",
        color: "text-amber-600",
        subtitleColor: "text-amber-800",
        bgColor: "bg-amber-50",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/de/Lambang_Kota_Cilegon.png",
        hasImage: true
    }
]

// Background images untuk slider
const backgroundImages = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg"
]

export default function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)
    const [, setIsImageLoaded] = useState(false)
    const [currentClientSlide, setCurrentClientSlide] = useState(0)
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    // Check screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640)
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Get items per slide based on screen size
    const getClientsPerSlide = () => {
        if (isMobile) return 1
        if (isTablet) return 2
        return 3
    }

    const getServicesPerSlide = () => {
        if (isMobile) return 1
        if (isTablet) return 2
        return 4
    }

    const clientsPerSlide = getClientsPerSlide()
    const servicesPerSlide = getServicesPerSlide()
    const maxClientSlides = Math.ceil(clientLogos.length / clientsPerSlide)
    const maxServiceSlides = Math.ceil(serviceHighlights.length / servicesPerSlide)

    // Auto slide functionality for background images
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
        }, 5000) // Ganti gambar setiap 5 detik

        return () => clearInterval(timer)
    }, [])

    // Auto slide functionality for client logos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentClientSlide((prev) => (prev + 1) % maxClientSlides)
        }, 4000) // Ganti slide setiap 4 detik

        return () => clearInterval(timer)
    }, [maxClientSlides])

    // Auto slide functionality for services
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentServiceSlide((prev) => (prev + 1) % maxServiceSlides)
        }, 6000) // Ganti slide setiap 6 detik

        return () => clearInterval(timer)
    }, [maxServiceSlides])

    const nextClientSlide = () => {
        setCurrentClientSlide((prev) => (prev + 1) % maxClientSlides)
    }

    const prevClientSlide = () => {
        setCurrentClientSlide((prev) => (prev - 1 + maxClientSlides) % maxClientSlides)
    }

    const nextServiceSlide = () => {
        setCurrentServiceSlide((prev) => (prev + 1) % maxServiceSlides)
    }

    const prevServiceSlide = () => {
        setCurrentServiceSlide((prev) => (prev - 1 + maxServiceSlides) % maxServiceSlides)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8">
            {/* Image Slider Background */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((image, index) => (
                    <motion.div
                        key={image}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                            opacity: index === currentImage ? 1 : 0,
                            scale: index === currentImage ? 1 : 1.1
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={image}
                            alt={`Background ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={90}
                            onLoad={() => index === 0 && setIsImageLoaded(true)}
                        />
                    </motion.div>
                ))}

                {/* Dark overlay untuk readability */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Gradient overlay untuk depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-transparent to-charcoal/30 z-20"></div>
            </div>

            {/* Animated overlay elements */}
            <div className="absolute inset-0 overflow-hidden z-30">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-navy/20 to-navy-dark/20 rounded-full mix-blend-overlay filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 0.8, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-amber/20 to-amber-dark/20 rounded-full mix-blend-overlay filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
                    className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-teal/20 to-teal-dark/20 rounded-full mix-blend-overlay filter blur-3xl"
                />
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 right-8 z-40 flex gap-3">
                {backgroundImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage
                            ? 'bg-white shadow-lg'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>

            <div className="relative z-40 text-center w-full max-w-7xl mx-auto">
                {/* Company Badge */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Badge className="px-8 py-4 text-base bg-gradient-to-r from-navy to-navy-dark text-white border-0 shadow-2xl hover:shadow-navy/25 transition-all duration-300 hover:scale-105 relative overflow-hidden backdrop-blur-sm">
                        <motion.div
                            animate={{ x: [-100, 100] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                        <Building2 className="w-5 h-5 mr-2 z-10 relative" />
                        <span className="hidden sm:inline z-10 relative">Est. 13 Juli 2021 | </span>
                        <span className="z-10 relative">Professional Industrial Services</span>
                        <Sparkles className="w-4 h-4 ml-2 z-10 relative" />
                    </Badge>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    {...fadeInUp}
                    className="mb-8"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="block text-white drop-shadow-2xl"
                        >
                            PT. KARYA
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="block bg-gradient-to-r from-amber via-amber-light to-amber-accent bg-clip-text text-transparent drop-shadow-2xl"
                        >
                            RIZKY ANDRIAN
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="mb-12"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-6xl mx-auto leading-relaxed font-medium drop-shadow-lg">
                        Solusi terpadu untuk{" "}
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-navy font-bold bg-white/90 px-4 py-2 rounded-lg inline-block mx-1 shadow-lg text-navy backdrop-blur-sm"
                        >
                            General Trading
                        </motion.span>,{" "}
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-amber-dark font-bold bg-white/90 px-4 py-2 rounded-lg inline-block mx-1 shadow-lg backdrop-blur-sm"
                        >
                            Engineering Construction
                        </motion.span>, dan{" "}
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-teal-dark font-bold bg-white/90 px-4 py-2 rounded-lg inline-block mx-1 shadow-lg backdrop-blur-sm"
                        >
                            Industrial Services
                        </motion.span>{" "}
                        dengan standar kualitas internasional
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
                >
                    <Link href="/services">
                        <Button size="lg" className="btn-navy px-12 py-5 text-xl font-bold shadow-2xl hover:scale-105 group border-0 relative overflow-hidden backdrop-blur-sm">
                            <motion.div
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            />
                            <Star className="mr-3 h-6 w-6 z-10 relative" />
                            <span className="z-10 relative">Jelajahi Layanan</span>
                            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2 z-10 relative" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button size="lg" className="bg-white/90 text-navy hover:bg-white border-white/50 px-12 py-5 text-xl font-bold hover:scale-105 group shadow-xl backdrop-blur-sm">
                            <Phone className="mr-3 h-6 w-6" />
                            Konsultasi Gratis
                            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 cursor-pointer shadow-xl hover:shadow-2xl relative overflow-hidden border border-white/50"
                        >
                            <div className="relative z-10">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex justify-center mb-4 ${stat.textColor}`}
                                >
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
                                        {stat.icon}
                                    </div>
                                </motion.div>
                                <div className={`text-4xl md:text-5xl font-black mb-3 ${stat.textColor}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold text-charcoal-light">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Service Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="max-w-5xl mx-auto mb-12"
                >
                    <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/50 relative overflow-hidden">
                        <motion.div
                            animate={{ x: [-200, 200] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/5 to-transparent"
                        />

                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                            className="text-3xl font-black text-charcoal mb-8 flex items-center justify-center gap-4"
                        >
                            <Star className="w-8 h-8 text-amber" />
                            Dipercaya oleh Perusahaan Terkemuka
                            <Star className="w-8 h-8 text-amber" />
                        </motion.h3>

                        {/* Client Logos Slider Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="mb-10 relative"
                        >
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentClientSlide}
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`grid ${isMobile ? 'grid-cols-1' :
                                            isTablet ? 'grid-cols-2' :
                                                'grid-cols-3'
                                            } gap-4 sm:gap-6 items-center justify-items-center`}
                                    >
                                        {clientLogos.slice(currentClientSlide * clientsPerSlide, (currentClientSlide * clientsPerSlide) + clientsPerSlide).map((client, index) => (
                                            <motion.div
                                                key={client.name}
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="group relative w-full max-w-xs"
                                            >
                                                <div className={`${client.bgColor} p-4 sm:p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200`}>
                                                    <div className="text-center">
                                                        {client.hasImage && client.imageUrl ? (
                                                            <div className="mb-3">
                                                                <div className="relative w-full h-12 sm:h-16 mx-auto">
                                                                    <Image
                                                                        src={client.imageUrl}
                                                                        alt={`${client.name} logo`}
                                                                        fill
                                                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                                                        onError={(e) => {
                                                                            // Fallback to icon+text if image fails
                                                                            const img = e.target as HTMLImageElement
                                                                            img.style.display = 'none'
                                                                            if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                                                                                (img.nextSibling as HTMLElement).style.display = 'block'
                                                                            }
                                                                        }}
                                                                    />
                                                                    <div className="hidden">
                                                                        <div className="text-xl sm:text-2xl mb-2">{client.icon}</div>
                                                                        <div className={`${client.color} font-black text-sm sm:text-lg mb-1`}>{client.displayName}</div>
                                                                        <div className={`${client.subtitleColor} font-bold text-xs sm:text-sm`}>{client.subtitle}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <>
                                                                <div className="text-xl sm:text-2xl mb-2">{client.icon}</div>
                                                                <div className={`${client.color} font-black text-sm sm:text-lg mb-1`}>{client.displayName}</div>
                                                                <div className={`${client.subtitleColor} font-bold text-xs sm:text-sm`}>{client.subtitle}</div>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Buttons for Clients */}
                                {maxClientSlides > 1 && (
                                    <>
                                        <button
                                            onClick={prevClientSlide}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                                        >
                                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={nextClientSlide}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                                        >
                                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Client Slider Indicators */}
                            {maxClientSlides > 1 && (
                                <div className="flex justify-center gap-2 mt-6">
                                    {Array.from({ length: maxClientSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentClientSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentClientSlide
                                                ? 'bg-navy w-6'
                                                : 'bg-gray-300 hover:bg-gray-400 w-2'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Service Highlights Slider */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.1, duration: 0.8 }}
                            className="mb-8 relative"
                        >
                            <div className="relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentServiceSlide}
                                        initial={{ x: 300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`grid ${isMobile ? 'grid-cols-1' :
                                            isTablet ? 'grid-cols-2' :
                                                'grid-cols-4'
                                            } gap-4 sm:gap-6`}
                                    >
                                        {serviceHighlights.slice(currentServiceSlide * servicesPerSlide, (currentServiceSlide * servicesPerSlide) + servicesPerSlide).map((service, index) => (
                                            <motion.div
                                                key={service.text}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className={`flex flex-col items-center gap-3 ${service.bg} p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                                            >
                                                <div className={`${service.color} group-hover:scale-110 transition-transform duration-300 p-2 rounded-full bg-white shadow-sm`}>
                                                    {service.icon}
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-charcoal group-hover:text-charcoal-dark transition-colors text-center leading-tight">
                                                    {service.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Buttons for Services */}
                                {maxServiceSlides > 1 && (
                                    <>
                                        <button
                                            onClick={prevServiceSlide}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                                        >
                                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={nextServiceSlide}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
                                        >
                                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Service Slider Indicators */}
                            {maxServiceSlides > 1 && (
                                <div className="flex justify-center gap-2 mt-6">
                                    {Array.from({ length: maxServiceSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentServiceSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentServiceSlide
                                                ? 'bg-amber w-6'
                                                : 'bg-gray-300 hover:bg-gray-400 w-2'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.7 }}
                            className="p-6 bg-gradient-to-r from-amber/20 to-amber-light/20 rounded-2xl border border-amber/20 relative overflow-hidden"
                        >
                            <motion.div
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            />
                            <p className="text-charcoal font-bold text-center text-lg relative z-10">
                                <CheckCircle2 className="w-6 h-6 inline mr-3" />
                                Didukung oleh <span className="bg-amber-accent px-2 py-1 rounded">sufficient financial</span> dan tenaga kerja berpengalaman untuk menjawab tantangan era globalisasi
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block z-40"
            >
                <div className="flex flex-col items-center group cursor-pointer">
                    <div className="text-sm font-medium text-white mb-3 group-hover:text-amber transition-colors drop-shadow-lg">Gulir untuk menjelajah</div>
                    <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center group-hover:border-amber transition-colors relative overflow-hidden backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-4 bg-amber rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}