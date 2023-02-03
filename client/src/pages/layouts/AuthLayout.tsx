import { Outlet } from "react-router-dom";
import { FullScreenCard } from "../../components/FullscreenCard";

export function AuthLayout() {
    return (
        <FullScreenCard>
            <FullScreenCard.Body>
                <Outlet />
            </FullScreenCard.Body>
            <FullScreenCard.BelowCard>
                FullScreenCard.BelowCard
            </FullScreenCard.BelowCard>
        </FullScreenCard>
    )
}