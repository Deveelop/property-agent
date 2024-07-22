import {NextResponse} from 'next/server'

const locations = [

        'Location (any)',
        'Wurukum',
        'High Level',
        'North Bank',
        'Wadata',
        'Modern Market',
        'Low Level',
        'Idye',
        'Gboko Road',
        'Ankpa Quarters',
        'New GRA'
        

]
export async function GET() {
    return NextResponse.json(locations)
}