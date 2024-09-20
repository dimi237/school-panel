<?php

namespace App\Http\Controllers;
use PDF;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Http\Request;
use App\Models\Customer;

class PdfController extends Controller
{
    public function attestation(Request $request)
    {
        $customer = Customer::where('id', $request->route('id'))->first();

        $qrcode = base64_encode(QrCode::size(200)->errorCorrection('H')->generate(route('details', $request->route('id'))));

        $pdf = PDF::loadView('attestation', [
            'id' => $customer->id,
            'name' => $customer->name,
            'birthdate' => $customer->birthdate,
            'birthplace' => $customer->birthplace,
            'certificate' => $customer->certificate,
            'certifdate' => $customer->certifdate,
            'speciality' => $customer->speciality,
            'role' => $customer->role,
            'qrcode' => $qrcode,
            'title' => 'Attestation' . $customer->name,
        ])->setPaper('a4', 'landscape');

        return $pdf->download('attestation_' . $customer->name . '.pdf');
    }

    public function badge(Request $request)
    {
        $customer = Customer::where('id', $request->route('id'))->first();

        $qrcode = base64_encode(QrCode::size(200)->errorCorrection('H')->generate(route('details', $request->route('id'))));

        $pdf = PDF::loadView('badge', [
            'name' => $customer->name,
            'role' => $customer->role,
            'expiration' => $customer->expiration,
            'title' => 'Badge' . $customer->name,
            'qrcode' => $qrcode,
        ])->setPaper('a5');

        return $pdf->download('badge' . $customer->name . '.pdf');
    }

}
